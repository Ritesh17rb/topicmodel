const datasets = [
    {
        name: "Discover Topics (Space vs Food)",
        description: "Auto-discovered topics from short documents",
        k: 2,
        nodes: [
            { id: "Mars has a thin atmosphere.", group: 0 },
            { id: "The moon orbits Earth.", group: 0 },
            { id: "Stars shine at night.", group: 0 },
            { id: "Bread needs yeast.", group: 1 },
            { id: "Basil smells fresh.", group: 1 }
        ],
        links: [
            { source: "Mars has a thin atmosphere.", target: "The moon orbits Earth.", value: 5 },
            { source: "Mars has a thin atmosphere.", target: "Stars shine at night.", value: 5 },
            { source: "The moon orbits Earth.", target: "Stars shine at night.", value: 4 },
            { source: "Bread needs yeast.", target: "Basil smells fresh.", value: 5 },
            { source: "Stars shine at night.", target: "Bread needs yeast.", value: 1 },
            { source: "The moon orbits Earth.", target: "Basil smells fresh.", value: 1 }
        ]
    },
    {
        name: "Use Existing Topics (Astronomy vs Cooking)",
        description: "Same documents, matched to predefined topics",
        k: 2,
        nodes: [
            { id: "Mars has a thin atmosphere.", group: 0 },
            { id: "The moon orbits Earth.", group: 0 },
            { id: "Stars shine at night.", group: 0 },
            { id: "Bread needs yeast.", group: 1 },
            { id: "Basil smells fresh.", group: 1 }
        ],
        links: [
            { source: "Mars has a thin atmosphere.", target: "The moon orbits Earth.", value: 4 },
            { source: "The moon orbits Earth.", target: "Stars shine at night.", value: 5 },
            { source: "Mars has a thin atmosphere.", target: "Stars shine at night.", value: 4 },
            { source: "Bread needs yeast.", target: "Basil smells fresh.", value: 5 },
            { source: "Stars shine at night.", target: "Bread needs yeast.", value: 1 },
            { source: "The moon orbits Earth.", target: "Basil smells fresh.", value: 1 }
        ]
    }
];

// Helper to generate text-based datasets with simulated similarity
function createTopicDataset(name, description, topicData) {
    const nodes = [];
    const links = [];
    const topics = Object.keys(topicData);

    // Create nodes (sentences are IDs)
    topics.forEach((topic, groupIdx) => {
        topicData[topic].forEach(text => {
            nodes.push({ id: text, group: groupIdx, topic: topic });
        });
    });

    // Create similarity links
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const sameGroup = nodes[i].group === nodes[j].group;

            // STRONG links for same topic (simulating high similarity)
            if (sameGroup) {
                if (Math.random() < 0.4) {
                    links.push({
                        source: nodes[i].id,
                        target: nodes[j].id,
                        value: 3 + Math.floor(Math.random() * 3)
                    });
                }
            }
            // NOISE links between topics
            else {
                if (Math.random() < 0.015) {
                    links.push({
                        source: nodes[i].id,
                        target: nodes[j].id,
                        value: 1
                    });
                }
            }
        }
    }
    return { name, description, nodes, links, k: topics.length };
}

// Add 6 Text-Based Topic Datasets
datasets.push(
    createTopicDataset("Tech Support (20 docs)", "Classify tickets: Hardware vs Software", {
        "Hardware": [
            "Screen is cracked", "Battery won't charge", "Keyboard key stuck",
            "Mouse not working", "Laptop overheating", "Fan is too loud",
            "Power button broken", "Screen flickering", "Charger port loose", "Hard drive failure"
        ],
        "Software": [
            "Windows won't update", "App crashes on start", "Blue screen error",
            "Driver missing", "Cannot install update", "System is slow",
            "Virus detected", "Wifi not connecting", "Password rejected", "Login failed"
        ]
    }),
    createTopicDataset("News Headlines (30 docs)", "Sports vs Finance news classification", {
        "Sports": [
            "Team wins final", "Player scores goal", "Match delayed by rain",
            "Coach fired today", "New world record", "Championship game set",
            "Ball hit net", "Stadium sold out", "Race finished fast", "Gold medal won",
            "Tennis rank up", "Football season start", "Golf tour begins", "Swimmer takes lead", "Referee call disputed"
        ],
        "Finance": [
            "Stock market crash", "Inflation rates up", "Bank interest rise",
            "Economy growing fast", "Invest in gold", "Shares plummet today",
            "Market closes high", "Tax season starts", "Profit margin up", "CEO resigns now",
            "Crypto values drop", "Real estate boom", "Dollar gets stronger", "Trade deal signed", "Quarterly earnings report"
        ]
    }),
    createTopicDataset("Reviews (30 docs)", "Sentiment Analysis: Positive vs Negative", {
        "Positive": [
            "Love this product", "Best purchase ever", "Works perfectly well",
            "Highly recommended item", "Five stars rating", "Great quality build",
            "Fast shipping time", "Customer service helpful", "Worth every penny",
            "Looks beautiful too", "Easy to use", "Battery lasts long", "Surpassed expectations", "Will buy again", "Gift for mom"
        ],
        "Negative": [
            "Worst experience ever", "Hate this item", "Stopped working today",
            "Waste of money", "One star rating", "Poor quality build",
            "Arrived broken box", "Rude support agents", "Too expensive for this",
            "Ugly color texture", "Hard to install", "Battery died fast", "Disappointed totally", "Do not buy", "Returning it now"
        ]
    }),
    createTopicDataset("Science (45 docs)", "Biology vs Physics vs Space", {
        "Biology": [
            "Cells divide rapidly", "DNA sequence found", "Protein folding study",
            "Enzyme reaction rate", "Bacteria growth lab", "Gene editing tool",
            "Virus spreads fast", "Immune system response", "Plant photosynthesis process",
            "Animal behavior study", "Brain neuron firing", "Heart rate monitor", "Blood pressure test", "Lung capacity check", "Skin tissue sample"
        ],
        "Physics": [
            "Quantum particle spin", "Laser light beam", "Magnetic field force",
            "Electron orbit path", "Gravity pulls down", "Velocity and mass",
            "Energy conservation law", "Atom nucleus split", "Thermal conductivity text",
            "Wave function collapse", "Speed of sound", "Force equals mass", "Friction slows motion", "Thermodynamics laws apply", "Electricity flows wire"
        ],
        "Space": [
            "Star goes supernova", "Black hole gravity", "Planet orbits sun",
            "Galaxy spiral arm", "Asteroid belt impact", "Mars rover lands",
            "Moon crater visible", "Telescope sees far", "Comet tail bright",
            "Nebula gas cloud", "Space station orbit", "Rocket launch pad", "Satellite signal lost", "Meteor shower tonight", "Alien life search"
        ]
    }),
    createTopicDataset("Smart Home (40 docs)", "Grouping IoT commands", {
        "Lighting": ["Turn on lights", "Dim the bedroom", "Set lights blue", "Lights off now", "Living room bright", "Kitchen light switch", "Desk lamp toggle", "Party mode lights", "Gradual wake up", "Night light mode"],
        "Climate": ["Set temp 72", "Turn on AC", "Heater to max", "Fan speed high", "Thermostat lowered", "Humidity is low", "Preheat the house", "Eco mode cooling", "Defrost system on", "Check room temp"],
        "Security": ["Lock front door", "Arm security system", "Camera recording on", "Motion detected yard", "Unlock back door", "Garage door close", "Alarm is ringing", "Window sensor open", "Doorbell camera view", "Gate access code"],
        "Media": ["Play some music", "Volume up TV", "Next song please", "Pause the movie", "Turn on speakers", "Connect bluetooth now", "Stream to chromecast", "Play jazz playlist", "Mute the sound", "TV power off"]
    }),
    createTopicDataset("Travel (40 docs)", "Transport: Air, Rail, Road, Sea", {
        "Air": ["Flight delayed hour", "Boarding pass print", "Pilot landing plane", "Airport security check", "Turbulence in air", "Gate number changed", "Baggage claim belt", "Fly business class", "Wings and engine", "Runway is clear"],
        "Rail": ["Train arriving platform", "Subway metro ticket", "Mind the gap", "Railway track work", "High speed rail", "Station stop next", "Conductor checks pass", "Tram crosses street", "Monorail loop ride", "Locomotive steam engine"],
        "Road": ["Traffic jam ahead", "Car highway drive", "Bus stop wait", "Taxi cab ride", "Traffic light red", "Parking spot full", "Motorcycle lane split", "Truck delivery route", "Road construction zone", "Uber driver here"],
        "Sea": ["Boat sails ocean", "Ferry crosses bay", "Cruise ship dock", "Anchor dropped down", "Waves hit hull", "Captain steers wheel", "Lifejacket safety vest", "Port cargo load", "Sailboat in wind", "Submarine deep dive"]
    })
);

const BASE_NEWS_TOPICS = {
    "Politics": ["Election polls update", "Senate passes bill", "President visits abroad", "Tax reform debate", "Policy change announced", "Diplomatic talks begin", "Vote count continues", "Campaign rally held", "Budget deficit grows", "Law new legislation"],
    "Technology": ["New AI model released", "Phone battery breakthrough", "Cybersecurity update", "Tech giant merges", "Software version 2.0", "Cloud computing growth", "Silicon chip size", "Virtual reality headset", "Data privacy laws", "Startup raises funds"],
    "Sports": ["Team wins championship", "Player injury report", "Match highlights video", "Coach strategy change", "Olympics medal count", "World records broken", "Season finals date", "Trade deadline moves", "Stadium renovation plan", "League standings update"],
    "Entertainment": ["Movie box office hit", "Celebrity award show", "New album drop", "TV series renewable", "Actor interview live", "Concert tour dates", "Streaming service stats", "Film festival winner", "Viral video trend", "Music charts top"],
    "Health": ["Vaccine trial results", "Healthy diet tips", "Exercise routine plan", "Mental health study", "Doctor advice daily", "Virus spread rate", "Hospital capacity check", "Medical breakthrough", "Wellness app update", "Sleep cycle research"]
};

const EXTENDED_NEWS_TOPICS = {
    ...BASE_NEWS_TOPICS,
    "Environment": ["Climate report released", "Wildlife habitat restored", "Ocean cleanup effort", "Air quality alert", "Recycling rates up", "Renewable energy plan", "Drought conditions rise", "Forest conservation grant", "Water shortage update", "Sustainability pledge"]
};

function buildTopicData(baseTopics, copies) {
    const data = {};
    Object.keys(baseTopics).forEach(key => {
        data[key] = [];
        for (let i = 0; i < copies; i++) {
            baseTopics[key].forEach(base => {
                data[key].push(`${base} - Report ${i + 1}`);
            });
        }
    });
    return data;
}

// Generate a large dataset
function generateLargeTopicData() {
    // 5 topics * 10 items * 3 copies = 150
    return buildTopicData(BASE_NEWS_TOPICS, 3);
}

datasets.push(
    createTopicDataset("Global News (150 docs)", "Large scale classification of 5 news categories", generateLargeTopicData())
);

// Add larger datasets (100+, 150+, 200+)
datasets.push(
    createTopicDataset("Regional Briefs (120 docs)", "6 categories with medium density", buildTopicData(EXTENDED_NEWS_TOPICS, 2)),
    createTopicDataset("World Wire (180 docs)", "6 categories with heavy coverage", buildTopicData(EXTENDED_NEWS_TOPICS, 3)),
    createTopicDataset("Mega Stream (240 docs)", "6 categories with massive volume", buildTopicData(EXTENDED_NEWS_TOPICS, 4))
);

// Color schemes for clusters
const colorSchemes = [
    ['#2196f3', '#ff9800', '#4caf50', '#9c27b0', '#f44336', '#00bcd4', '#ffeb3b', '#795548', '#607d8b'],
    ['#00bcd4', '#ff5722', '#8bc34a', '#673ab7', '#e91e63', '#3f51b5', '#ffc107', '#9e9e9e', '#009688'],
    ['#3f51b5', '#f44336', '#009688', '#ff6f00', '#7b1fa2', '#4caf50', '#c62828', '#ad1457', '#6a1b9a'],
    ['#2196f3', '#e91e63', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4', '#ff5722', '#8bc34a', '#673ab7'],
    ['#00bcd4', '#ff5722', '#8bc34a', '#ffc107', '#673ab7', '#3f51b5', '#f44336', '#009688', '#ff6f00'],
    ['#3f51b5', '#f44336', '#009688', '#ff6f00', '#7b1fa2', '#4caf50', '#1e88e5', '#d81b60', '#43a047'],
    ['#1e88e5', '#d81b60', '#43a047', '#fb8c00', '#8e24aa', '#00acc1', '#00897b', '#c62828', '#5e35b1'],
    ['#00897b', '#c62828', '#5e35b1', '#f9a825', '#3949ab', '#7cb342', '#546e7a', '#ef6c00', '#6d4c41'],
    ['#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50'],
    ['#ff7043', '#26a69a', '#7e57c2', '#42a5f5', '#ab47bc', '#66bb6a', '#ffa726', '#26c6da', '#8d6e63'],
    ['#5c6bc0', '#ef5350', '#26a69a', '#ffa726', '#ab47bc', '#66bb6a', '#29b6f6', '#8d6e63', '#c0ca33'],
    ['#26a69a', '#ef5350', '#7e57c2', '#ffa726', '#42a5f5', '#66bb6a', '#ec407a', '#78909c', '#ffee58']
];

let currentDataset = 0;

// SHARED PHYSICS CONFIGURATION
// Ensuring WYSIWYG accuracy between K-Means layout calculation and visualization
const PHYSICS = {
    distance: 50,
    charge: -200,
    collide: 20,
    centerStrength: 0.1
};

// Helper to pre-compute layout for K-Means (Geometry aware)
function computeLayout(nodes, links) {
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(PHYSICS.distance))
        .force('charge', d3.forceManyBody().strength(PHYSICS.charge))
        .force('center', d3.forceCenter(0, 0))
        .force('collide', d3.forceCollide(PHYSICS.collide))
        .stop();

    // Run simulation ticks to stabilize
    // Increased iterations for better convergence
    for (let i = 0; i < 400; ++i) simulation.tick();
    return nodes;
}

// K-Means implementation (Geometric)
function kMeans(nodes, k = 4) {
    // Use the x,y coordinates from the force layout
    const positions = nodes.map((n, i) => ({
        id: n.id,
        x: n.x,
        y: n.y,
        index: i
    }));

    // Helper: Calculate Squared Euclidean Distance
    const distSq = (p1, p2) => (p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2;

    // Correct K-Means++ without the loop bug:
    function initCentroids(points, k) {
        const centroids = [points[Math.floor(Math.random() * points.length)]];
        for (let i = 1; i < k; i++) {
            const dists = points.map(p => {
                let min = Infinity;
                for (const c of centroids) min = Math.min(min, distSq(p, c));
                return min;
            });
            const sum = dists.reduce((a, b) => a + b, 0);
            let r = Math.random() * sum;
            let nextCentroid = points[points.length - 1];
            for (let j = 0; j < points.length; j++) {
                r -= dists[j];
                if (r <= 0) {
                    nextCentroid = points[j];
                    break;
                }
            }
            centroids.push({ x: nextCentroid.x, y: nextCentroid.y });
        }
        return centroids;
    }

    // Run Single K-Means iteration
    function runOneKMeans(points, k, seeds) {
        let centroids = seeds.map(c => ({ ...c }));
        let clusters = new Array(points.length).fill(0);
        let inertia = 0;
        let changed = true;
        let iter = 0;
        const maxIter = 300;

        while (changed && iter < maxIter) {
            changed = false;
            inertia = 0;
            const newCounts = new Array(k).fill(0);
            const newSums = Array.from({ length: k }, () => ({ x: 0, y: 0 }));

            // Assign
            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                let minD = Infinity;
                let bestC = 0;
                for (let j = 0; j < k; j++) {
                    const d = distSq(p, centroids[j]);
                    if (d < minD) {
                        minD = d;
                        bestC = j;
                    }
                }
                if (clusters[i] !== bestC) changed = true;
                clusters[i] = bestC;
                inertia += minD;
                newCounts[bestC]++;
                newSums[bestC].x += p.x;
                newSums[bestC].y += p.y;
            }

            // Update
            for (let j = 0; j < k; j++) {
                if (newCounts[j] > 0) {
                    centroids[j].x = newSums[j].x / newCounts[j];
                    centroids[j].y = newSums[j].y / newCounts[j];
                } else {
                    // Re-init empty cluster
                    const randP = points[Math.floor(Math.random() * points.length)];
                    centroids[j] = { x: randP.x, y: randP.y };
                }
            }
            iter++;
        }
        return { clusters, inertia };
    }

    // Run n_init=10 times and pick best
    let bestResult = null;
    let minInertia = Infinity;

    // Auto-detect if n_init needed (10 is standard)
    const n_init = 10;

    for (let run = 0; run < n_init; run++) {
        const seeds = initCentroids(positions, k);
        const result = runOneKMeans(positions, k, seeds);
        if (result.inertia < minInertia) {
            minInertia = result.inertia;
            bestResult = result;
        }
    }

    return bestResult.clusters;
}

// Leiden Algorithm Implementation (Modularity Maximization)
function leidenAlgorithm(nodes, links, expectedK = 5) {
    const n = nodes.length;
    // Resolution parameter (gamma). 
    const gamma = expectedK / Math.max(n, 1);

    // Build Adjacency
    const adj = Array.from({ length: n }, () => []);
    const nodeMap = new Map(nodes.map((n, i) => [n.id, i]));
    let totalWeight = 0;

    links.forEach(link => {
        const i = nodeMap.get(link.source.id || link.source);
        const j = nodeMap.get(link.target.id || link.target);
        if (i !== undefined && j !== undefined && i !== j) {
            const w = link.value || 1;
            adj[i].push({ target: j, weight: w });
            adj[j].push({ target: i, weight: w });
            totalWeight += w;
        }
    });

    const m = totalWeight;

    // Node degrees (weighted)
    const k = new Float64Array(n);
    adj.forEach((neighbors, i) => {
        let sum = 0;
        neighbors.forEach(e => sum += e.weight);
        k[i] = sum;
    });

    // Initialize: Each node in its own community
    let communities = new Int32Array(n).map((_, i) => i);

    // Community weights sum (Sigma_tot)
    const commDegreeSums = new Map();
    for (let i = 0; i < n; i++) commDegreeSums.set(i, k[i]);

    let improved = true;
    const maxPasses = 50;

    // Greedy Move Phase (Core of Leiden/Louvain)
    for (let pass = 0; pass < maxPasses && improved; pass++) {
        improved = false;
        // Randomize node order
        const order = Array.from({ length: n }, (_, i) => i);
        for (let i = order.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [order[i], order[j]] = [order[j], order[i]];
        }

        for (const u of order) {
            const currentComm = communities[u];
            const uDegree = k[u];

            // Map: NeighborComm -> weight of links from u to that comm (k_{u,C})
            const neighborComms = new Map();

            adj[u].forEach(edge => {
                const v = edge.target;
                const vComm = communities[v];
                neighborComms.set(vComm, (neighborComms.get(vComm) || 0) + edge.weight);
            });

            // Ensure current community is in map to evaluate 'staying'
            if (!neighborComms.has(currentComm)) neighborComms.set(currentComm, 0);

            let bestComm = currentComm;
            let bestScore = -Infinity;

            const twoM = 2 * Math.max(m, 1);

            for (const [commId, k_u_c] of neighborComms.entries()) {
                let sigma_tot = commDegreeSums.get(commId);

                // If u is currently in commId, sigma_tot includes k_u. We want 'rest of community'.
                if (commId === currentComm) {
                    sigma_tot -= uDegree;
                }

                // Objective Function Change component
                const score = k_u_c - (gamma * uDegree * sigma_tot / twoM);

                if (score > bestScore) {
                    bestScore = score;
                    bestComm = commId;
                } else if (Math.abs(score - bestScore) < 1e-9) {
                    // Tie-breaking: stability preference
                    if (commId === currentComm) bestComm = commId;
                }
            }

            if (bestComm !== currentComm) {
                // Update State
                commDegreeSums.set(currentComm, commDegreeSums.get(currentComm) - uDegree);
                commDegreeSums.set(bestComm, (commDegreeSums.get(bestComm) || 0) + uDegree);
                communities[u] = bestComm;
                improved = true;
            }
        }
    }

    // Remap to 0..k for visualization
    const unique = [...new Set(communities)];
    const map = new Map(unique.map((c, i) => [c, i]));
    return Array.from(communities).map(c => map.get(c));
}

// Modularity Calculation
function calculateModularity(nodes, links, clusters) {
    const nodeMap = new Map(nodes.map((n, i) => [n.id, i]));
    const m = links.reduce((sum, l) => sum + l.value, 0);
    if (m === 0) return 0;

    const degrees = new Array(nodes.length).fill(0);
    links.forEach(link => {
        const i = nodeMap.get(link.source.id || link.source);
        const j = nodeMap.get(link.target.id || link.target);
        if (i !== undefined) degrees[i] += link.value;
        if (j !== undefined) degrees[j] += link.value;
    });

    let Q = 0;
    links.forEach(link => {
        const i = nodeMap.get(link.source.id || link.source);
        const j = nodeMap.get(link.target.id || link.target);
        if (i !== undefined && j !== undefined && clusters[i] === clusters[j]) {
            Q += link.value - (degrees[i] * degrees[j]) / (2 * m);
        }
    });

    return Q / m;
}

// Calculate "Broken Links" - strong connections split across clusters
function analyzeBrokenLinks(nodes, links, clusters) {
    const nodeMap = new Map(nodes.map((n, i) => [n.id, i]));
    const brokenLinks = [];

    links.forEach(link => {
        const i = nodeMap.get(link.source.id || link.source);
        const j = nodeMap.get(link.target.id || link.target);
        if (i !== undefined && j !== undefined && clusters[i] !== clusters[j] && link.value > 2) {
            brokenLinks.push({
                source: nodes[i].id,
                target: nodes[j].id,
                value: link.value,
                sourceCluster: clusters[i],
                targetCluster: clusters[j]
            });
        }
    });

    return brokenLinks;
}

function addDynamicLinks(nodes, baseLinks, sliderValue) {
    if (!nodes || nodes.length === 0) return baseLinks;
    if (!baseLinks) baseLinks = [];

    const linkKey = (a, b) => (a < b ? `${a}||${b}` : `${b}||${a}`);
    const existing = new Map();
    baseLinks.forEach(link => {
        const a = link.source.id || link.source;
        const b = link.target.id || link.target;
        existing.set(linkKey(a, b), link.value);
    });

    if (sliderValue <= 0) return baseLinks;

    const sameProb = Math.min(0.12 + sliderValue * 0.08, 0.75);
    const crossProb = Math.min(0.01 + sliderValue * 0.02, 0.15);
    const newLinks = [...baseLinks];

    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            const key = linkKey(a.id, b.id);
            if (existing.has(key)) continue;

            const sameGroup = a.group === b.group;
            const p = sameGroup ? sameProb : crossProb;
            if (Math.random() < p) {
                const value = sameGroup
                    ? 2 + Math.floor(Math.random() * Math.max(2, sliderValue + 1))
                    : 1 + (sliderValue >= 4 ? 1 : 0);
                newLinks.push({ source: a.id, target: b.id, value });
                existing.set(key, value);
            }
        }
    }

    return newLinks;
}

// Visualization with "Smoking Gun" highlights
// Accepts 'preComputedNodes' to ensure WYSIWYG accuracy
function visualize(containerId, data, clusters, colors, algorithmName, preComputedNodes = null) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    // Responsive sizing - larger for better visibility
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;
    const width = isFullscreen ? window.innerWidth - 100 : (container.clientWidth || 800);
    const height = isFullscreen ? window.innerHeight - 150 : 800;

    const zoom = d3.zoom()
        .scaleExtent([0.1, 8])
        .on('zoom', (event) => {
            svgGroup.attr('transform', event.transform);

            // Synchronized Zoom
            if (event.sourceEvent) {
                const otherId = containerId === 'kmeans-viz' ? 'leiden-viz' : 'kmeans-viz';
                if (window.vizSync && window.vizSync[otherId]) {
                    const { svg: otherSvg, zoom: otherZoom } = window.vizSync[otherId];
                    // Apply transform to other visualization without triggering its event loop
                    // (d3 zoom transform triggers event, but sourceEvent will be null)
                    if (otherSvg && otherZoom) {
                        otherSvg.call(otherZoom.transform, event.transform);
                    }
                }
            }
        });

    const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', [-width / 2, -height / 2, width, height])
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .call(zoom)
        .on('dblclick.zoom', null);

    // Update global sync object with actual zoom behavior
    if (window.vizSync && window.vizSync[containerId]) {
        window.vizSync[containerId].zoom = zoom;
    }

    const svgGroup = svg.append('g');

    // Use pre-computed nodes if available (preserves K-Means geometry)
    // or fallback to fresh nodes
    let nodes;
    if (preComputedNodes) {
        // Use coordinates from pre-compute
        nodes = preComputedNodes.map((n, i) => ({
            ...n,
            cluster: clusters[i],
            x: n.x,
            y: n.y
        }));
    } else {
        nodes = data.nodes.map((d, i) => ({ ...d, cluster: clusters[i] }));
    }

    const nodeMap = new Map(nodes.map(n => [n.id, n]));
    const links = data.links.map(d => ({
        ...d,
        source: nodeMap.get(d.source.id || d.source),
        target: nodeMap.get(d.target.id || d.target)
    })).filter(l => l.source && l.target);

    // Analyze broken links for this clustering
    const brokenLinks = analyzeBrokenLinks(data.nodes, data.links, clusters);

    // Order: Hulls, Bad Links (Red), Good Links, Nodes, Labels
    const hullGroup = svgGroup.append('g').attr('class', 'hulls');
    const badLinkGroup = svgGroup.append('g').attr('class', 'bad-links');
    const linkGroup = svgGroup.append('g').attr('class', 'links');
    const nodeGroup = svgGroup.append('g').attr('class', 'nodes');
    const labelGroup = svgGroup.append('g').attr('class', 'labels');

    // Register for Sync
    if (!window.vizSync) window.vizSync = {};
    window.vizSync[containerId] = { svg, zoom: null };

    // Simulation uses SHARED PHYSICS parameters
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(PHYSICS.distance))
        .force('charge', d3.forceManyBody().strength(PHYSICS.charge))
        .force('center', d3.forceCenter(0, 0).strength(PHYSICS.centerStrength))
        .force('collide', d3.forceCollide(PHYSICS.collide).strength(1));

    // Dynamic Visuals for Large Datasets
    const isLarge = nodes.length > 80;
    const nodeRadius = isLarge ? 5 : 10;
    const linkOpacity = isLarge ? 0.2 : 0.6;
    const linkWidthScale = isLarge ? 0.8 : 1.5;

    // Good Links (within cluster)
    const link = linkGroup.selectAll('line')
        .data(links.filter(d => d.source.cluster === d.target.cluster))
        .join('line')
        .attr('stroke', d => colors[d.source.cluster % colors.length])
        .attr('stroke-width', d => Math.sqrt(d.value) * linkWidthScale)
        .attr('stroke-opacity', linkOpacity);

    // Bad Links (cross-cluster, strong connections)
    const badLink = badLinkGroup.selectAll('line')
        .data(links.filter(d => d.source.cluster !== d.target.cluster && d.value > 2))
        .join('line')
        .attr('stroke', '#ff3333')
        .attr('stroke-width', d => Math.sqrt(d.value) * 2.5)
        .attr('stroke-opacity', 0.8)
        .attr('stroke-dasharray', '6,3');

    // Nodes - with hover interaction
    const node = nodeGroup.selectAll('.node')
        .data(nodes)
        .join('g')
        .attr('class', 'node')
        .on('mouseover', function (event, d) {
            const connectedNodeIds = new Set();
            connectedNodeIds.add(d.id);

            // Find neighbors
            links.forEach(l => {
                if (l.source.id === d.id) connectedNodeIds.add(l.target.id);
                if (l.target.id === d.id) connectedNodeIds.add(l.source.id);
            });

            // Dim others
            nodeGroup.selectAll('.node').classed('dimmed', n => !connectedNodeIds.has(n.id));
            linkGroup.selectAll('line').classed('dimmed', l => l.source.id !== d.id && l.target.id !== d.id);
            badLinkGroup.selectAll('line').classed('dimmed', l => l.source.id !== d.id && l.target.id !== d.id);

            // Highlight neighbors and self
            nodeGroup.selectAll('.node')
                .filter(n => connectedNodeIds.has(n.id))
                .classed('active-element', true);

            linkGroup.selectAll('line')
                .filter(l => l.source.id === d.id || l.target.id === d.id)
                .classed('active-element', true);

            badLinkGroup.selectAll('line')
                .filter(l => l.source.id === d.id || l.target.id === d.id)
                .classed('active-element', true);

            // Labels (Show neighbors, dim others but keep slightly visible)
            labelGroup.selectAll('text')
                .classed('active-label', n => connectedNodeIds.has(n.id))
                .style('opacity', n => connectedNodeIds.has(n.id) ? 1 : 0.2);
        })
        .on('mouseout', function () {
            svgGroup.selectAll('.dimmed').classed('dimmed', false);
            svgGroup.selectAll('.active-element').classed('active-element', false);
            labelGroup.selectAll('.active-label').classed('active-label', false);
            // Reset Label Opacity (Keep visible)
            labelGroup.selectAll('text').style('opacity', 1);
        })
        .call(drag(simulation));

    node.append('circle')
        .attr('r', nodeRadius)
        .attr('fill', d => colors[d.cluster % colors.length])
        .attr('stroke', '#fff')
        .attr('stroke-width', isLarge ? 1 : 2);

    const labelFont = nodes.length >= 200 ? 9 : nodes.length >= 120 ? 10 : 12;
    const labelHaloWidth = nodes.length >= 200 ? 3.5 : nodes.length >= 120 ? 3 : 2.5;

    // Labels (Always Visible with Smart Styling)
    const labels = labelGroup.selectAll('text')
        .data(nodes)
        .join('text')
        .text(d => d.id)
        .attr('font-size', `${labelFont}px`)
        .attr('fill', '#fff')
        .attr('text-anchor', 'start')
        .attr('dx', isLarge ? 8 : 14)
        .attr('dy', 4)
        .style('opacity', 1)
        .style('pointer-events', 'none')
        .style('paint-order', 'stroke')
        .style('stroke', 'rgba(0,0,0,0.8)')
        .style('stroke-width', '3px')
        .style('stroke-linejoin', 'round')
        .style('font-weight', isLarge ? 'normal' : '500')
        .style('text-shadow', '0 2px 4px rgba(0,0,0,1)');

    const curve = d3.line().curve(d3.curveBasisClosed);

    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        badLink
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('transform', d => `translate(${d.x},${d.y})`);

        labelGroup.selectAll('text')
            .attr('x', d => d.x)
            .attr('y', d => d.y);

        // Hulls
        const clusterPoints = new Map();
        nodes.forEach(n => {
            if (!clusterPoints.has(n.cluster)) clusterPoints.set(n.cluster, []);
            clusterPoints.get(n.cluster).push([n.x, n.y]);
        });

        const hullData = [];
        clusterPoints.forEach((points, clusterId) => {
            if (points.length < 3) return;
            const hullPoints = d3.polygonHull(points);
            if (hullPoints) {
                hullData.push({ cluster: clusterId, path: curve(hullPoints) });
            }
        });

        hullGroup.selectAll('path')
            .data(hullData)
            .join('path')
            .attr('d', d => d.path)
            .attr('fill', d => colors[d.cluster % colors.length])
            .attr('fill-opacity', 0.1)
            .attr('stroke', d => colors[d.cluster % colors.length])
            .attr('stroke-width', 1.5)
            .attr('stroke-opacity', 0.4)
            .attr('stroke-dasharray', '4,4');
    });

    // Add broken link count badge
    const badgeSize = isFullscreen ? 20 : 18;
    const badgeY = -height / 2 + 40;

    if (brokenLinks.length > 0) {
        const badge = svg.append('g')
            .attr('transform', `translate(${-width / 2 + 15}, ${badgeY})`);

        badge.append('rect')
            .attr('x', -5)
            .attr('y', -badgeSize - 5)
            .attr('width', 280)
            .attr('height', badgeSize + 12)
            .attr('fill', 'rgba(255, 51, 51, 0.2)')
            .attr('stroke', '#ff3333')
            .attr('stroke-width', 2)
            .attr('rx', 6);

        badge.append('text')
            .attr('x', 5)
            .attr('y', -5)
            .attr('fill', '#ff3333')
            .attr('font-size', `${badgeSize}px`)
            .attr('font-weight', 'bold')
            .text(`⚠ ${brokenLinks.length} Broken Connection${brokenLinks.length > 1 ? 's' : ''}`);
    } else {
        const badge = svg.append('g')
            .attr('transform', `translate(${-width / 2 + 15}, ${badgeY})`);

        badge.append('rect')
            .attr('x', -5)
            .attr('y', -badgeSize - 5)
            .attr('width', 280)
            .attr('height', badgeSize + 12)
            .attr('fill', 'rgba(76, 175, 80, 0.2)')
            .attr('stroke', '#4caf50')
            .attr('stroke-width', 2)
            .attr('rx', 6);

        badge.append('text')
            .attr('x', 5)
            .attr('y', -5)
            .attr('fill', '#4caf50')
            .attr('font-size', `${badgeSize}px`)
            .attr('font-weight', 'bold')
            .text(`✓ 0 Broken Connections`);
    }

    // Auto Find/Zoom to Content
    function autoZoom() {
        const bounds = svgGroup.node().getBBox();
        const fullWidth = width;
        const fullHeight = height;

        if (bounds.width === 0 || bounds.height === 0) return;

        const scale = 0.85 * Math.min(
            fullWidth / bounds.width,
            fullHeight / bounds.height
        );

        const constrainedScale = Math.min(Math.max(scale, 0.2), 1.5);
        const midX = bounds.x + bounds.width / 2;
        const midY = bounds.y + bounds.height / 2;

        const transform = d3.zoomIdentity
            .translate(-constrainedScale * midX, -constrainedScale * midY)
            .scale(constrainedScale);

        svg.transition()
            .duration(750)
            .call(zoom.transform, transform);
    }

    // Slight delay to allow ticks
    setTimeout(autoZoom, 400);
}

function drag(simulation) {
    function dragstarted(event) {
        if (!event.active) simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    function dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    function dragended(event) {
        if (!event.active) simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }

    return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended);
}

// Run Comparison
function runComparison() {
    // Reset Sync State
    window.vizSync = {};

    const data = datasets[currentDataset];
    const colors = colorSchemes[currentDataset];

    // Get slider value
    const slider = document.getElementById('connection-slider');
    const sliderValue = slider ? parseInt(slider.value) : 0;

    // Update slider display
    const validDisplay = document.getElementById('slider-value');
    if (validDisplay) validDisplay.textContent = sliderValue;

    // Dynamically add connections based on slider (Density)
    const dynamicLinks = addDynamicLinks(data.nodes, data.links, sliderValue);

    // Create a data object for visualization and algorithms
    const filteredData = {
        ...data,
        links: dynamicLinks
    };

    // 1. Prepare data clones
    const simNodes = data.nodes.map(d => ({ ...d }));
    // Links need deep copy reference to source/target string/id if string
    const simLinks = dynamicLinks.map(d => ({ ...d, source: d.source, target: d.target }));

    // 2. Compute Layout (Geometry)
    // This adds x/y to simNodes based on the PHYSICS config
    computeLayout(simNodes, simLinks);

    // 3. Run K-Means
    // Uses the computed x/y from simNodes
    const kMeansClusters = kMeans(simNodes, data.k || 4);
    const kMeansModularity = calculateModularity(data.nodes, dynamicLinks, kMeansClusters);
    const kMeansBroken = analyzeBrokenLinks(data.nodes, dynamicLinks, kMeansClusters);

    // 4. Run Leiden
    // Use dynamic links (Leiden depends on graph structure)
    const leidenClusters = leidenAlgorithm(data.nodes, dynamicLinks, data.k || 4);
    const leidenModularity = calculateModularity(data.nodes, dynamicLinks, leidenClusters);
    const leidenBroken = analyzeBrokenLinks(data.nodes, dynamicLinks, leidenClusters);

    // Visualize
    // PASS simNodes SO VISUALIZATION USES SAME GEOMETRY AS K-MEANS
    visualize('kmeans-viz', filteredData, kMeansClusters, colors, 'K-Means', simNodes);
    visualize('leiden-viz', filteredData, leidenClusters, colors, 'Leiden', simNodes);

    // Update metrics
    const kmMetric = document.getElementById('kmeans-modularity');
    const ldMetric = document.getElementById('leiden-modularity');
    if (kmMetric) kmMetric.textContent = kMeansModularity.toFixed(3);
    if (ldMetric) ldMetric.textContent = leidenModularity.toFixed(3);

    // Interpretation
    const winner = leidenModularity > kMeansModularity ? 'Leiden' : 'K-Means';

    let interpretation = `<span class="winner-badge"><i class="bi bi-trophy"></i> ${winner} WINS!</span><br><br>`;

    interpretation += `<strong>🔍 The Smoking Gun:</strong><br>`;
    interpretation += `<div style="background: rgba(255,51,51,0.1); border-left: 3px solid #ff3333; padding: 12px; margin: 10px 0; border-radius: 4px;">`;
    interpretation += `<strong style="color: #ff3333;">K-Means Broken Links: ${kMeansBroken.length}</strong><br>`;
    interpretation += `<strong style="color: #4caf50;">Leiden Broken Links: ${leidenBroken.length}</strong><br><br>`;

    if (kMeansBroken.length > 0) {
        interpretation += `<strong>What K-Means Got Wrong:</strong><br>`;
        const examples = kMeansBroken.slice(0, 3);
        examples.forEach(link => {
            interpretation += `• Split "<em>${link.source}</em>" from "<em>${link.target}</em>" (similarity: ${link.value})<br>`;
        });
        if (kMeansBroken.length > 3) {
            interpretation += `<em>...and ${kMeansBroken.length - 3} more mistakes</em><br>`;
        }
    }
    interpretation += `</div>`;

    interpretation += `<strong>📊 Connection Density Level ${sliderValue}:</strong><br>`;
    interpretation += `<span style="display: inline-block; width: 20px; height: 3px; background: #4caf50; margin-right: 5px;"></span> Higher values add more links across the graph<br><br>`;

    interpretation += `<strong>Why This Matters:</strong><br>`;
    interpretation += `Leiden's higher modularity (${leidenModularity.toFixed(3)} vs ${kMeansModularity.toFixed(3)}) means it preserves more natural relationships in the data.`;

    const interpEl = document.getElementById('interpretation-text');
    if (interpEl) interpEl.innerHTML = interpretation;
}

// Event Listeners
document.querySelectorAll('.dataset-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.dataset-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        currentDataset = index;
        runComparison();
    });
});

// Slider Listener
const slider = document.getElementById('connection-slider');
if (slider) {
    slider.addEventListener('input', () => {
        runComparison();
    });
}

// Setup Fullscreen
const buttons = document.querySelectorAll('[data-fullscreen-target]');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-fullscreen-target');
        const target = document.getElementById(targetId);
        if (!target) return;
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            if (target.requestFullscreen) target.requestFullscreen();
            else if (target.webkitRequestFullscreen) target.webkitRequestFullscreen();
        }
    });
});
document.addEventListener('fullscreenchange', () => {
    setTimeout(() => runComparison(), 50);
});

// Initial Run
runComparison();
