const React = require('react')
const ReactDOM = require('react-dom')

class App extends React.Component {
    constructor(props) {
        super(props)
        this.songs = [
            { name: '\u2605 Twinkle', score: [
                ['C4,4', 'C4,4', 'G4,4', 'G4,4', 'A4,4', 'A4,4', 'G4,2'],
                ['F4,4', 'F4,4', 'E4,4', 'E4,4', 'D4,4', 'D4,4', 'C4,2'],
                ['G4,4', 'G4,4', 'F4,4', 'F4,4', 'E4,4', 'E4,4', 'D4,2'],
                ['G4,4', 'G4,4', 'F4,4', 'F4,4', 'E4,4', 'E4,4', 'D4,2'],
                ['C4,4', 'C4,4', 'G4,4', 'G4,4', 'A4,4', 'A4,4', 'G4,2'],
                ['F4,4', 'F4,4', 'E4,4', 'E4,4', 'D4,4', 'D4,4', 'C4,2'],
            ]},
            { name: '\uD83D\uDEB6 Noa', score: [
                ['C4,4', 'C4,4', 'C4,4', 'E4,4', 'D4,4', 'D4,4', 'D4,4', 'F4,4'],
                ['E4,4', 'E4,4', 'D4,4', 'D4,4', 'C4,2'],
                ['E4,4', 'E4,4', 'E4,4', 'E4,4', 'G4,2', 'F4,2'],
                ['D4,4', 'D4,4', 'D4,4', 'D4,4', 'F4,2', 'E4,2'],
                ['C4,4', 'C4,4', 'C4,4', 'E4,4', 'D4,4', 'D4,4', 'D4,4', 'F4,4'],
                ['E4,4', 'E4,4', 'D4,4', 'D4,4', 'C4,2'],
            ]},
            { name: '\uD83C\uDF82 Birthday', score: [
                ['D4,8', 'D4,8', 'E4,4', 'D4,4', 'G4,4', 'F4,2'],
                ['D4,8', 'D4,8', 'E4,4', 'D4,4', 'A4,4', 'G4,2'],
                ['D4,8', 'D4,8', 'D5,4', 'B4,4', 'G4,4', 'F4,4', 'E4,4'],
                ['C5,8', 'C5,8', 'B4,4', 'G4,4', 'A4,4', 'G4,2'],
            ]},
            { name: '\uD83D\uDC07 Rabbit', score: [
                ['C4,8', 'D4,8', 'E4,8', 'F4,8', 'G4,4', 'G4,4'],
                ['A4,4', 'A4,4', 'G4,2', 'null,'],
                ['A4,4', 'A4,4', 'G4,2', 'null,'],
                ['G4,8', 'F4,8', 'F4,8', 'F4,8', 'F4,8', 'E4,8', 'E4,4'],
                ['E4,8', 'D4,8', 'D4,8', 'D4,8', 'D4,8', 'C4,8', 'C4,4'],
                ['C4,8', 'E4,8', 'G4,4'],
                ['C4,8', 'E4,8', 'G4,4'],
                ['G4,4', 'G4,4', 'C4,2'],
            ]},
            { name: '\u2744 Frost', score: [
                ['D4,8', 'F4,8', 'D4,8', 'F4,8'],
                ['E4,4', 'E4,4', 'null,'],
                ['E4,8', 'G4,8', 'C4,8', 'E4,8'],
                ['D4,4', 'D4,4', 'null,'],
                ['F4,8', 'F4,8', 'F4,8', 'F4,8'],
                ['A4,8', 'F4,8', 'A4,8', 'F4,8'],
                ['G4,8', 'G4,8', 'G4,8', 'G4,8'],
                ['B4,8', 'A4,8', 'A4,8', 'F4,8'],
                ['D4,8', 'F4,8', 'D4,8', 'F4,8'],
                ['E4,4', 'E4,4', 'null,'],
                ['E4,8', 'G4,8', 'C4,8', 'E4,8'],
                ['D4,4', 'D4,4', 'null,'],
            ]},
            { name: '\uD83D\uDD77 Spider', score: [
                ['C4,8', 'C4,8', 'C4,8', 'D4,8'],
                ['E4,4', 'E4,4'],
                ['D4,8', 'C4,8', 'D4,8', 'E4,8'],
                ['C4,2', 'null,'],
                ['E4,8', 'E4,8', 'E4,8', 'F4,8'],
                ['G4,4', 'G4,4'],
                ['F4,8', 'E4,8', 'F4,8', 'G4,8'],
                ['E4,2', 'null,'],
                ['C5,4', 'C5,8', 'C5,8'],
                ['B4,4', 'B4,4'],
                ['A4,8', 'A4,8', 'A4,8', 'A4,8'],
                ['G4,2', 'null,'],
                ['C4,8', 'C4,8', 'C4,8', 'D4,8'],
                ['E4,4', 'E4,4'],
                ['D4,8', 'C4,8', 'D4,8', 'E4,8'],
                ['C4,2', 'null,'],
            ]},
            /*{ name: '\u266B Do-Re-Mi', score: [
                ['C4,4', 'D4,4', 'E4,4', 'F4,4', 'G4,4', 'A4,4'],
                ['B4,4', 'C5,4', 'D5,4', 'E5,4', 'F5,4', 'G5,4'],
                ['G5,4', 'F5,4', 'E5,4', 'D5,4', 'C5,4', 'B4,4'],
                ['A4,4', 'G4,4', 'F4,4', 'E4,4', 'D4,4', 'C4,4'],
            ]}*/
        ]
        this.colorSchemes = [
            'basic', 'ruby', 'plain', 'piano'
        ]

        this.state = {
            song: this.songs[0],
            color: this.colorSchemes[0]
        }
    }
    nextSong() {
        const currentIndex = this.songs.indexOf(this.state.song)
        const next = currentIndex + 1 < this.songs.length
            ? currentIndex + 1
            : 0;
        this.setState({ song: this.songs[next], color: this.state.color })
    }
    selectColor(newColor) {
        this.setState({ song: this.state.song, color: newColor })
    }
    render() {
        return <container className={'color-' + this.state.color}>
                <Score song={this.state.song} onNextSong={this.nextSong.bind(this)} />
                <Settings song={this.state.song} onNextSong={this.nextSong.bind(this)}
                            colorSchemes={this.colorSchemes} onSelectColor={this.selectColor.bind(this)} />
                <Piano />
            </container>
    }
}

class IosOverlay extends React.Component {
    constructor(props) {
        super(props)

        // overlay only needed for iOS
        this.state = { showOverlay: /iPhone|iPad|iPod/i.test(navigator.userAgent) }
    }
    click() {
        // for some reason apple does not allow to trigger webaudio on touchstart
        // so this is a workaround to trigger some audio with touchend, after that it works with touchstart also
        // for more info on wy this is needed, see http://www.holovaty.com/writing/ios9-web-audio/
        // and https://github.com/Tonejs/Tone.js/issues/67
        Tone.startMobile()
        this.setState({ showOverlay: false })
    }
    render() {
        if (!this.state.showOverlay) {
            return null
        }

        return <div className="overlay" onClick={this.click.bind(this)}>
                <a onClick={this.click.bind(this)}>START</a>
            </div>
    }
}

class Settings extends React.Component {
    render() {
        let selectColor = (color) => () => this.props.onSelectColor(color)
        let colorList = this.props.colorSchemes.map(color =>
            <div className={'color-' + color} onClick={selectColor(color)}></div>
        )
        return <div className="settings">
                <div onClick={this.props.onNextSong}>Song: <span className="song">{this.props.song.name}</span></div>
                <div className="color-select">Color: {colorList}</div>
            </div>
    }
}

class Score extends React.Component {
    getNoteClassName(noteWithTime) {
        let note, time;
        [note, time] = noteWithTime.split(',')
        let classes = ['note', note, note[0], 't' + time]

        return classes.join(' ')
    }
    render() {
        let clef = <note><span className="note clef" /></note>
        let scoreList = this.props.song.score.map((score, index) =>
            <div className="score" onClick={this.props.onNextSong}>
                {(index === 0) ? clef : null}
                {score.map(note =>
                    <note><span className={this.getNoteClassName(note)}/></note>
                )}
            </div>
        )

        return <div className="sheet">{scoreList}</div>
    }
}

class Piano extends React.Component {
    constructor(props) {
        super(props)
        this.synth = new Tone.SimpleSynth().toMaster()
    }
    play(note) {
        this.synth.triggerAttack(note)
    }
    release() {
        this.synth.triggerRelease()
    }
    render() {
        let keys = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5']
        let keyList = keys.map(key =>
            <Key onPress={this.play.bind(this)} onRelease={this.release.bind(this)} note={key} />
        )

        // touch-action attribute required by PEP (Pointer Events Polyfill)
        return <div className="piano"
                    ref={node => node && node.setAttribute('touch-action', 'none')}>
                    {keyList}
                </div>
    }
}

const Key = React.createClass({
    getInitialState: function () {
        return { pressed: false }
    },
    componentDidMount: function() {
        /**
         * Use PEP (Pointer Events Polyfill) to detect touches that move accross dom elements.
         * (requires that a touch-action attribute is present in html to activate it)
         */
        ReactDOM.findDOMNode(this).addEventListener('pointerdown', this.press)
        ReactDOM.findDOMNode(this).addEventListener('pointerup', this.release)
        ReactDOM.findDOMNode(this).addEventListener('pointerenter', this.press)
        ReactDOM.findDOMNode(this).addEventListener('pointerleave', this.release)
        ReactDOM.findDOMNode(this).addEventListener('pointercancel', this.release)
    },
    press: function (e) {
        // When not on touch device, filter out events when mouse button not pressed
        const isTouchDevice = 'ontouchstart' in window.document.documentElement;
        if (this.state.pressed || (!isTouchDevice && e.buttons !== 1)) {
            return
        }
        this.setState({ pressed: true })
        this.props.onPress(this.props.note)
    },
    release: function () {
        this.setState({ pressed: false })
        this.props.onRelease(this.props.note)
    },
    getClassName: function () {
        let classes = ['key', this.props.note[0], 'o' + this.props.note[1]]
        if (this.state.pressed) {
            classes.push('down')
        }
        return classes.join(' ')
    },
    render: function () {
        return <a className={this.getClassName()}><span/></a>
    }
});

ReactDOM.render(
    <div><IosOverlay /><App /></div>,
    document.getElementById('root')
)
