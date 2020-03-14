import React, { Component } from 'react';
import './work-panel.css';
import { getImage } from './api';

export default class WorkPanel extends Component {

    state = {
        tag: null,
        image: {},
        loading: false
    }

    getTag = event => {
        this.setState({
            tag: event.target.value
        })
    }

    createImageItem = event => {
        event.preventDefault()
        this.setState({
            loading: true
        })
        const { tag } = this.state;
        getImage(tag).then(data => {
            this.setState({
                image: {
                    id: data.id,
                    tag: tag,
                    image: data.image_url,
                    date: new Date()
                },
                loading: false
            })
            this.props.setState([...this.props.images, this.state.image])
        })
        .catch(error => console.log(error))
    }

    onClear = () => {
        this.props.setState([])
        this.setState({
            tag: null
        })
    }

    onGroup = () => {
        this.props.setGroup(group => !group)
    }

    render() {
        const { image, tag, loading } = this.state;
        const { group } = this.props;
        // console.log(image, this.props)
        return (
            <div onSubmit={this.createImageItem} className='work-panel'>
                <form className='form-inline'>
                    <input className='form-control'
                           placeholder='введите тег'
                           onChange={this.getTag}
                           />
                    {loading ? <button disabled className='btn btn-load mx-sm-2'>Загрузка...</button> : 
                    <button type='submit' className='btn btn-load mx-sm-2'>Загрузить</button>}
                    <button type='reset' className='btn btn-clear' onClick={this.onClear}>Очистить</button>
                    <button type='button' className='btn btn-group mx-sm-2' onClick={this.onGroup}>
                        {group ? 'Разгруппировать': 'Группировать'}
                    </button>
                </form>
            </div>
        )
    }
}