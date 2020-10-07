import React, { Component } from 'react'
import { connect } from 'react-redux'

import episodeActions from '../redux/actions/episode'

class Episode extends Component {

    componentDidMount() {
        this.props.getEpisode()
    }


    render() {
        const { isLoading, data, isError, alertMsg } = this.props.episode
        return (
            <div>
                {!isLoading && !isError && data.length !== 0 && data.map(o => (
                    <>
                        <div>{o.name}</div>
                    </>
                ))}
                {isLoading && !isError && (
                    <div>Loading</div>
                )}
                {isError && alertMsg !== '' && (
                    <div>{alertMsg}</div>
                )}
            </div>
        )
    }
}

const mapStateToPops = state => ({
    episode: state.episode
})

const mapDispatchToPops = {
    getEpisode: episodeActions.getData
}

export default connect(mapStateToPops, mapDispatchToPops)(Episode)