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

// Color schemes for clusters
const colorSchemes = [
    ['#2196f3', '#ff9800', '#4caf50', '#9c27b0', '#f44336', '#00bcd4', '#ffeb3b', '#795548', '#607d8b'],
    ['#00bcd4', '#ff5722', '#8bc34a', '#673ab7', '#e91e63', '#3f51b5', '#ffc107', '#9e9e9e', '#009688'],
    ['#3f51b5', '#f44336', '#009688', '#ff6f00', '#7b1fa2', '#4caf50', '#c62828', '#ad1457', '#6a1b9a'],
    ['#2196f3', '#e91e63', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4', '#ff5722', '#8bc34a', '#673ab7'],
    ['#00bcd4', '#ff5722', '#8bc34a', '#ffc107', '#673ab7', '#3f51b5', '#f44336', '#009688', '#ff6f00'],
    ['#3f51b5', '#f44336', '#009688', '#ff6f00', '#7b1fa2', '#4caf50', '#1e88e5', '#d81b60', '#43a047'],
    ['#1e88e5', '#d81b60', '#43a047', '#fb8c00', '#8e24aa', '#00acc1', '#00897b', '#c62828', '#5e35b1'],
    ['#00897b', '#c62828', '#5e35b1', '#f9a825', '#3949ab', '#7cb342', '#546e7a', '#ef6c00', '#6d4c41']
];

let currentDataset = 0;

// Helper to pre-compute layout for K-Means (Geometry aware)
function computeLayout(nodes, links) {
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(100))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('center', d3.forceCenter(0, 0))
        .stop();

    // Run simulation ticks to stabilize
    for (let i = 0; i < 300; ++i) simulation.tick();
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
    const maxIterations = 50;

    // Initialize centroids using random points from data
    let centroids = [];
    for (let i = 0; i < k; i++) {
        const randomNode = positions[Math.floor(Math.random() * positions.length)];
        centroids.push({ x: randomNode.x + Math.random(), y: randomNode.y + Math.random() });
    }

    let clusters = new Array(nodes.length).fill(0);

    for (let iter = 0; iter < maxIterations; iter++) {
        // Assign points to nearest centroid
        positions.forEach((p, i) => {
            let minDist = Infinity;
            let bestCluster = 0;
            centroids.forEach((c, ci) => {
                const dist = Math.sqrt((p.x - c.x) ** 2 + (p.y - c.y) ** 2);
                if (dist < minDist) {
                    minDist = dist;
                    bestCluster = ci;
                }
            });
            clusters[i] = bestCluster;
        });

        // Update centroids
        const newCentroids = new Array(k).fill(null).map(() => ({ x: 0, y: 0, count: 0 }));
        positions.forEach((p, i) => {
            const c = clusters[i];
            newCentroids[c].x += p.x;
            newCentroids[c].y += p.y;
            newCentroids[c].count++;
        });

        centroids = newCentroids.map(c => {
            if (c.count === 0) return { x: Math.random() * 100, y: Math.random() * 100 };
            return { x: c.x / c.count, y: c.y / c.count };
        });
    }

    return clusters;
}

// Leiden Algorithm (Simplified Community Detection)
function leidenAlgorithm(nodes, links) {
    const n = nodes.length;
    const adjacency = Array(n).fill(null).map(() => Array(n).fill(0));
    const nodeMap = new Map(nodes.map((n, i) => [n.id, i]));

    links.forEach(link => {
        const i = nodeMap.get(link.source.id || link.source);
        const j = nodeMap.get(link.target.id || link.target);
        if (i !== undefined && j !== undefined) {
            adjacency[i][j] = link.value;
            adjacency[j][i] = link.value;
        }
    });

    // Initialize communities (each node is its own)
    let communities = nodes.map((_, i) => i);

    let improved = true;
    for (let iter = 0; iter < 20 && improved; iter++) {
        improved = false;
        const order = Array.from({ length: n }, (_, i) => i).sort(() => Math.random() - 0.5);

        for (const i of order) {
            const currentComm = communities[i];
            const neighborComms = new Map();

            // Find neighbor communities
            for (let j = 0; j < n; j++) {
                if (adjacency[i][j] > 0) {
                    const c = communities[j];
                    neighborComms.set(c, (neighborComms.get(c) || 0) + adjacency[i][j]);
                }
            }

            let bestComm = currentComm;
            let maxWeight = neighborComms.get(currentComm) || 0;

            neighborComms.forEach((weight, c) => {
                if (weight > maxWeight) {
                    maxWeight = weight;
                    bestComm = c;
                }
            });

            if (bestComm !== currentComm) {
                communities[i] = bestComm;
                improved = true;
            }
        }
    }

    // Remap communities to 0..k
    const unique = [...new Set(communities)];
    const map = new Map(unique.map((c, i) => [c, i]));
    return communities.map(c => map.get(c));
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

// Visualization
function visualize(containerId, data, clusters, colors) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    const width = container.clientWidth || 700;
    const height = container.clientHeight || 600;

    const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [-width / 2, -height / 2, width, height]);

    const nodes = data.nodes.map((d, i) => ({ ...d, cluster: clusters[i] }));
    const links = data.links.map(d => ({ ...d }));

    // Re-run simulation for visual effect (soft start from computed layout)
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(100))
        .force('charge', d3.forceManyBody().strength(-300))
        .force('collide', d3.forceCollide(20));

    const link = svg.append('g')
        .selectAll('line')
        .data(links)
        .join('line')
        .attr('class', 'link')
        .attr('stroke', '#999')
        .attr('stroke-width', d => Math.sqrt(d.value));

    const node = svg.append('g')
        .selectAll('g')
        .data(nodes)
        .join('g')
        .call(drag(simulation));

    node.append('circle')
        .attr('r', 10)
        .attr('fill', d => colors[d.cluster % colors.length] || '#ccc');

    node.append('text')
        .text(d => d.id)
        .attr('x', 12)
        .attr('y', 4)
        .style('font-size', '10px')
        .style('fill', 'var(--text-secondary)')
        .style('pointer-events', 'none');

    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
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
    const data = datasets[currentDataset];
    const colors = colorSchemes[currentDataset];

    // 1. Prepare data clones
    const simNodes = data.nodes.map(d => ({ ...d }));
    const simLinks = data.links.map(d => ({ ...d, source: d.source, target: d.target }));

    // 2. Compute Layout (Geometry)
    computeLayout(simNodes, simLinks);

    // 3. Run K-Means
    const kMeansClusters = kMeans(simNodes, data.k || 4);
    const kMeansModularity = calculateModularity(data.nodes, data.links, kMeansClusters);

    // 4. Run Leiden
    const leidenClusters = leidenAlgorithm(data.nodes, data.links);
    const leidenModularity = calculateModularity(data.nodes, data.links, leidenClusters);

    // Visualize
    visualize('kmeans-viz', data, kMeansClusters, colors);
    visualize('leiden-viz', data, leidenClusters, colors);

    // Update metrics
    const kmMetric = document.getElementById('kmeans-modularity');
    const ldMetric = document.getElementById('leiden-modularity');
    if (kmMetric) kmMetric.textContent = kMeansModularity.toFixed(3);
    if (ldMetric) ldMetric.textContent = leidenModularity.toFixed(3);

    // Generate interpertation
    const winner = leidenModularity > kMeansModularity ? 'Leiden' : 'K-Means';
    const difference = Math.abs(leidenModularity - kMeansModularity);
    const percentDiff = ((difference / (Math.max(kMeansModularity, leidenModularity) || 1)) * 100).toFixed(1);

    let interpretation = `<span class="winner-badge"><i class="bi bi-trophy"></i> ${winner} WINS!</span><br><br>`;

    if (currentDataset === 0) {
        interpretation += `<strong>Discover Topics Example:</strong><br>`;
        if (leidenModularity > kMeansModularity) {
            interpretation += `<strong>Leiden wins by ${percentDiff}%!</strong><br><br>
            This mirrors the docs example where topic discovery splits documents into Space/Astronomy and Food/Ingredients.`;
        } else {
            interpretation += `<strong>K-Means wins by ${percentDiff}%</strong><br><br>
            When the layout happens to separate the documents cleanly, K-Means can win.`;
        }
    } else if (currentDataset === 1) {
        interpretation += `<strong>Use Existing Topics Example:</strong><br>`;
        if (leidenModularity > kMeansModularity) {
            interpretation += `<strong>Leiden wins by ${percentDiff}%!</strong><br><br>
            This matches the docs flow where you supply an explicit topics.txt.`;
        } else {
            interpretation += `<strong>K-Means wins by ${percentDiff}%</strong><br><br>
            K-Means can win when the geometry separates the two topic groups.`;
        }
    } else {
        const name = datasets[currentDataset].name;
        interpretation += `<strong>${name} Analysis:</strong><br>`;
        interpretation += `<strong>Topic discovery in action!</strong><br><br>
        Leiden (Network-based) follows semantic links.<br>
        K-Means (Geometric) tries to find circular clusters in the layout.<br><br>
        Leiden Modularity: ${leidenModularity.toFixed(3)}<br>
        K-Means Modularity: ${kMeansModularity.toFixed(3)}`;
    }

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
