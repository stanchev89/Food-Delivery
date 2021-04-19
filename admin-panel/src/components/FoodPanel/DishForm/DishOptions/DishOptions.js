import {Component} from 'react';
import {MdDeleteForever, MdRemoveCircleOutline} from 'react-icons/md';
import './DishOptions.css';


class DishOption extends Component {
    // saveOptions() {
    //     const option = {};
    //     option[this.state.optionName] = this.state.optionValue;
    //     return this.props.saveOptions(option)
    // }

    render() {
        return (
            <>
                {
                    Object.keys(this.props.options)?.length > 0
                        ? Object.keys(this.props.options).map(optName => {
                            return (

                                <article className="option-wrapper" key={optName}>
                                    <h3>Set option</h3>
                                    <article className="option-name-wrapper">

                                        <input type="text" placeholder="enter option name"
                                               defaultValue={optName === 'name' ? '' : optName}
                                               onBlur={this.props.onChangeOptionName.bind(this, optName)}/>
                                        <button type="button" onClick={this.props.addOptionValue.bind(this, optName)}>Add
                                            value
                                        </button>
                                        <MdRemoveCircleOutline onClick={this.props.deleteOption.bind(null, optName)}/>
                                    </article>
                                    {
                                        this.props.options[optName].map((val, i) => {
                                            <h1>{optName}</h1>
                                            return (

                                                <article key={i} className="option-values-wrapper">
                                                    {
                                                        <>
                                                            <input type="text" placeholder="enter value"
                                                                   value={val}
                                                                   onChange={this.props.onChangeOptionValue.bind(this, optName, i)}/>
                                                            <MdDeleteForever
                                                                onClick={this.props.removeOptionValue.bind(this, optName, i)}/>
                                                        </>
                                                    }
                                                </article>
                                            )
                                        })
                                    }
                                </article>
                            )
                        })
                        : null

                }
                <article className="options-btn-wrapper">
                    {
                        Object.keys(this.props.options)?.length === 0
                            ? <button className="add-dish-options" type="button" onClick={this.props.addDishOption}>Add
                                dish option</button>
                            : <button className="add-dish-save-options" type="button"
                                      onClick={this.props.saveOptions.bind(this)}>Save options</button>

                    }
                </article>


            </>

        )

    }
}

export default DishOption;