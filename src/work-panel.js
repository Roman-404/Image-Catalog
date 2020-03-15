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
        this.props.setNotification(null)
    }

    createImageItem = event => {
        event.preventDefault()
        this.setState({ loading: true })
        const { tag } = this.state;
        if (tag) {
        getImage(tag).then(data => {
            if (data.length) {
            this.setState({
                image: {
                    id: data.id,
                    tag: tag,
                    image: data.image_url,
                    date: new Date()
                },
                loading: false
            })
            this.props.setState([...this.props.images, this.state.image])}
            else {
                this.props.setNotification(`По тегу '${tag}' ничего не найдено`)
                this.setState({ loading: false })
            }
        })
        .catch(error => {
            error = error.toString().replace(/Error:/, '')
            this.props.setNotification(`Произошла http ошибка: ${error}`)
            this.setState({ loading: false })
        })}
        else {
            this.props.setNotification('заполните поле \'тег\'')
            this.setState({ loading: false })
        }
    }

    onClear = () => {
        this.props.setState([])
        this.props.setNotification(null)
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