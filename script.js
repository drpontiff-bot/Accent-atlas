// Accent data
const accents = {
    cockney: {
        title: "Cockney (East London)",
        content: `
        <h3>🎙 YouTube Accent Sample</h3>
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/XkK_123456" frameborder="0" allowfullscreen></iframe>

        <h3>🎬 Movie Examples</h3>
        <ul>
            <li><a href="https://www.youtube.com/watch?v=example1" target="_blank">My Fair Lady (1964)</a></li>
            <li><a href="https://www.youtube.com/watch?v=example2" target="_blank">Lock, Stock and Two Smoking Barrels (1998)</a></li>
        </ul>

        <h3>👤 Notable Speakers</h3>
        <ul>
            <li><a href="https://en.wikipedia.org/wiki/Michael_Caine" target="_blank">Michael Caine</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Ray_Winstone" target="_blank">Ray Winstone</a></li>
        </ul>
        `
    },
    scouse: {
        title: "Scouse (Liverpool)",
        content: `
        <h3>🎙 YouTube Accent Sample</h3>
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/YkY_123456" frameborder="0" allowfullscreen></iframe>

        <h3>🎬 Movie Examples</h3>
        <ul>
            <li><a href="https://www.youtube.com/watch?v=example3" target="_blank">The 51st State (2001)</a></li>
        </ul>

        <h3>👤 Notable Speakers</h3>
        <ul>
            <li><a href="https://en.wikipedia.org/wiki/John_Lennon" target="_blank">John Lennon</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Jodie_Comer" target="_blank">Jodie Comer</a></li>
        </ul>
        `
    },
    geordie: {
        title: "Geordie (Newcastle)",
        content: `
        <h3>🎙 YouTube Accent Sample</h3>
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/ZkZ_123456" frameborder="0" allowfullscreen></iframe>

        <h3>🎬 Movie Examples</h3>
        <ul>
            <li><a href="https://www.youtube.com/watch?v=example4" target="_blank">Billy Elliot (2000)</a></li>
        </ul>

        <h3>👤 Notable Speakers</h3>
        <ul>
            <li><a href="https://en.wikipedia.org/wiki/Ant_McPartlin" target="_blank">Ant McPartlin</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Declan_Donnelly" target="_blank">Declan Donnelly</a></li>
        </ul>
        `
    },
    brummie: {
        title: "Brummie (Birmingham)",
        content: `
        <h3>🎙 YouTube Accent Sample</h3>
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/AkA_123456" frameborder="0" allowfullscreen></iframe>

        <h3>🎬 Movie/TV Examples</h3>
        <ul>
            <li><a href="https://www.youtube.com/watch?v=example5" target="_blank">Peaky Blinders (2013)</a></li>
        </ul>

        <h3>👤 Notable Speakers</h3>
        <ul>
            <li><a href="https://en.wikipedia.org/wiki/Ozzy_Osbourne" target="_blank">Ozzy Osbourne</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Julie_Walters" target="_blank">Julie Walters</a></li>
        </ul>
        `
    },
    rp: {
        title: "Received Pronunciation (RP, Southern England)",
        content: `
        <h3>🎙 YouTube Accent Sample</h3>
        <iframe width="100%" height="200" src="https://www.youtube.com/embed/BkB_123456" frameborder="0" allowfullscreen></iframe>

        <h3>🎬 Movie Examples</h3>
        <ul>
            <li><a href="https://www.youtube.com/watch?v=example6" target="_blank">The King's Speech (2010)</a></li>
        </ul>

        <h3>👤 Notable Speakers</h3>
        <ul>
            <li><a href="https://en.wikipedia.org/wiki/David_Attenborough" target="_blank">David Attenborough</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Emma_Watson" target="_blank">Emma Watson</a></li>
        </ul>
        `
    }
};

// Open accent scroll panel
function openAccent(accentKey) {
    const panel = document.getElementById('scrollPanel');
    const title = document.getElementById('accentTitle');
    const content = document.getElementById('accentContent');

    title.innerHTML = accents[accentKey].title;
    content.innerHTML = accents[accentKey].content;

    panel.classList.remove('hidden');
}

// Close accent scroll panel
function closeAccent() {
    document.getElementById('scroll
