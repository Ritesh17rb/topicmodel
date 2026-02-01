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
        .force('link', d3.forceLink(links).id(d => d.id).distance(30))
        .force('charge', d3.forceManyBody().strength(-100))
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

// Visualization with "Smoking Gun" highlights
function visualize(containerId, data, clusters, colors, algorithmName) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = '';

    // Responsive sizing - larger for better visibility
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement;
    const width = isFullscreen ? window.innerWidth - 100 : (container.clientWidth || 800);
    const height = isFullscreen ? window.innerHeight - 150 : 800;

    const zoom = d3.zoom()
        .scaleExtent([0.5, 4])
        .on('zoom', (event) => {
            svgGroup.attr('transform', event.transform);
        });

    const svg = d3.select(`#${containerId}`)
        .append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', [-width / 2, -height / 2, width, height])
        .attr('preserveAspectRatio', 'xMidYMid meet')
        .call(zoom)
        .on('dblclick.zoom', null);

    const svgGroup = svg.append('g');

    const nodes = data.nodes.map((d, i) => ({ ...d, cluster: clusters[i] }));
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

    // Simulation with larger forces for bigger canvas
    const simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(links).id(d => d.id).distance(50))
        .force('charge', d3.forceManyBody().strength(-200))
        .force('center', d3.forceCenter(0, 0).strength(0.1))
        .force('collide', d3.forceCollide(20).strength(1));

    // Good Links (within cluster)
    const link = linkGroup.selectAll('line')
        .data(links.filter(d => d.source.cluster === d.target.cluster))
        .join('line')
        .attr('stroke', d => colors[d.source.cluster % colors.length])
        .attr('stroke-width', d => Math.sqrt(d.value) * 1.2)
        .attr('stroke-opacity', 0.5);

    // Bad Links (cross-cluster, strong connections)
    const badLink = badLinkGroup.selectAll('line')
        .data(links.filter(d => d.source.cluster !== d.target.cluster && d.value > 2))
        .join('line')
        .attr('stroke', '#ff0000')
        .attr('stroke-width', d => Math.sqrt(d.value) * 2.5)
        .attr('stroke-opacity', 0.95)
        .attr('stroke-dasharray', '8,4');

    // Nodes - larger for better visibility
    const node = nodeGroup.selectAll('.node')
        .data(nodes)
        .join('g')
        .attr('class', 'node')
        .call(drag(simulation));

    node.append('circle')
        .attr('r', 9)
        .attr('fill', d => colors[d.cluster % colors.length])
        .attr('stroke', '#fff')
        .attr('stroke-width', 2.5);

    // Labels (only for small datasets)
    if (nodes.length < 100) {
        const labels = labelGroup.selectAll('text')
            .data(nodes)
            .join('text')
            .text(d => d.id)
            .attr('font-size', '12px')
            .attr('fill', 'var(--text-primary)')
            .attr('text-anchor', 'start')
            .attr('dx', 12)
            .attr('dy', 4)
            .style('pointer-events', 'none')
            .style('text-shadow', '0 2px 4px rgba(0,0,0,0.9)');
    }

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

        if (nodes.length < 100) {
            labelGroup.selectAll('text')
                .attr('x', d => d.x)
                .attr('y', d => d.y);
        }

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
            .attr('fill-opacity', 0.08)
            .attr('stroke', d => colors[d.cluster % colors.length])
            .attr('stroke-width', 2)
            .attr('stroke-opacity', 0.3)
            .attr('stroke-dasharray', '3,3');
    });

    // Add broken link count badge - larger and more visible
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
        // Calculate bounding box of the graph content (nodes/links/hulls)
        const bounds = svgGroup.node().getBBox();
        const fullWidth = width;
        const fullHeight = height;

        // If empty or invalid, skip
        if (bounds.width === 0 || bounds.height === 0) return;

        // Determine scale to fit with padding
        // (Use 0.85 factor to leave space for badges and edges)
        const scale = 0.85 * Math.min(
            fullWidth / bounds.width,
            fullHeight / bounds.height
        );

        // Clamp scale to reasonable limits (prevent zooming in too much on tiny graphs)
        // Upper limit reduced to 1.5 to avoid giant nodes
        const constrainedScale = Math.min(Math.max(scale, 0.2), 1.5);

        // Calculate translation to move center of bounds to center of view (0,0)
        // Since ViewBox is centered at (0,0), we target that.
        const midX = bounds.x + bounds.width / 2;
        const midY = bounds.y + bounds.height / 2;

        // Apply transform
        const transform = d3.zoomIdentity
            .translate(-constrainedScale * midX, -constrainedScale * midY)
            .scale(constrainedScale);

        svg.transition()
            .duration(750)
            .call(zoom.transform, transform);
    }

    // Trigger auto-zoom after simulation has mostly shaped up
    setTimeout(autoZoom, 600);
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
    const kMeansBroken = analyzeBrokenLinks(data.nodes, data.links, kMeansClusters);

    // 4. Run Leiden
    const leidenClusters = leidenAlgorithm(data.nodes, data.links);
    const leidenModularity = calculateModularity(data.nodes, data.links, leidenClusters);
    const leidenBroken = analyzeBrokenLinks(data.nodes, data.links, leidenClusters);

    // Visualize
    visualize('kmeans-viz', data, kMeansClusters, colors, 'K-Means');
    visualize('leiden-viz', data, leidenClusters, colors, 'Leiden');

    // Update metrics
    const kmMetric = document.getElementById('kmeans-modularity');
    const ldMetric = document.getElementById('leiden-modularity');
    if (kmMetric) kmMetric.textContent = kMeansModularity.toFixed(3);
    if (ldMetric) ldMetric.textContent = leidenModularity.toFixed(3);

    // Generate interpretation with "Smoking Gun"
    const winner = leidenModularity > kMeansModularity ? 'Leiden' : 'K-Means';
    const difference = Math.abs(leidenModularity - kMeansModularity);
    const percentDiff = ((difference / (Math.max(kMeansModularity, leidenModularity) || 1)) * 100).toFixed(1);

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

    interpretation += `<strong>📊 Visual Guide:</strong><br>`;
    interpretation += `<span style="display: inline-block; width: 20px; height: 3px; background: #4caf50; margin-right: 5px;"></span> Solid colored lines = Items correctly grouped together<br>`;
    interpretation += `<span style="display: inline-block; width: 20px; height: 3px; background: #ff3333; margin-right: 5px;"></span> Red dashed lines = Related items wrongly separated<br><br>`;

    interpretation += `<strong>Why This Matters:</strong><br>`;
    interpretation += `Leiden's higher modularity (${leidenModularity.toFixed(3)} vs ${kMeansModularity.toFixed(3)}) means it preserves ${((1 - leidenBroken.length / Math.max(kMeansBroken.length, 1)) * 100).toFixed(0)}% more natural relationships in the data.`;

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
