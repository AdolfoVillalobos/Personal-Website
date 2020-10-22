import React from "react"


export default class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            theme: 'light'
        }
    }

    toggleTheme() {
        let newtheme = this.state.theme === 'light' ? 'dark' : 'light'
        this.setState({
            theme: newtheme
        })
    }

    render() {
        let theme = themes[this.state.theme];
        return (
            <section className="hero is-fullheight has-text-centered">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-mobile">
                            <Brace type="left" color={theme.font}/>
                            <ProfileImage toggle={this.toggleTheme.bind(this)} />
                            <Brace type="right" color={theme.font}/>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <Title color={theme.font}/>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column">
                                <Button title="My GitHub" url="https://github.com/nutanek" />
                                <Button title="My Works" url="https://www.indytheme.com" />                                
                            </div>
                        </div>
                    </div>
                    <Background color={theme.background}/>
                </div>
            </section>
        )
    }
}