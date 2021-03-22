import { Component } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { GrAddCircle } from 'react-icons/gr';
import { MdRemoveCircleOutline } from 'react-icons/md';
import './DishOptions.css';


class DishOption extends Component {

    changeValueName(index, event) {
        console.log(this.state)
        const valName = event.target.value;
        const allValues = this.state.optionValue;
        allValues[index] = valName;
        return () => {
            this.setState((prevState) => ({ ...prevState, optionValue: allValues }))
        }
    }

    toggleEditOptionName() {
        return () => { this.setState((prevState) => ({ ...prevState, editOptionName: !prevState.editOptionName })); }

    }

    deleteOptionValue(index) {
        const opts = this.state.optionValue;
        opts.splice(index, 1);
        return () => this.setState((prevState) => ({ ...prevState, optionValue: opts }))
    }

    saveOptions() {
        const option = {};
        console.log(this.state)
        option[this.state.optionName] = this.state.optionValue;
        return this.props.saveOptions(option)
    }

    render() {
        return (
            <>
                {
                    this.props.options.length > 0
                        ? this.props.options.map((opt, idx) => {
                            {/* const optIndex = Math.round(Math.random() * Date.now()); */ }
                            const [optName] = Object.keys(opt);
                            const [optValue] = Object.values(opt).filter(v => v !== null);
                            return (
                                <article className="option-wrapper" key={idx}>
                                    <article className="option-name-wrapper">
                                        <input type="text" placeholder="enter option name" value={optName === 'name' ? '' : optName} onChange={this.props.onChangeOptionName.bind(this, idx)} />
                                        <button onClick={this.props.addOptionValue.bind(this, idx)}>Add value</button>
                                        <MdRemoveCircleOutline onClick={this.props.deleteOption.bind(null, idx)}></MdRemoveCircleOutline>
                                    </article>
                                    {
                                        this.props.options[idx][optName].map((val, i) => {
                                            <h1>{val}</h1>
                                            return (

                                                <article key={i} className="option-values-wrapper" >
                                                    {
                                                        val !== null ?
                                                            <>
                                                                <input type="text" placeholder="enter value" value={optValue[i]} onChange={this.props.onChangeOptionValue.bind(this, idx, i)}></input>
                                                                <MdDeleteForever onClick={this.props.removeOptionValue.bind(this, idx, i)}></MdDeleteForever>
                                                            </>
                                                            : null

                                                    }

                                                </article>
                                            )
                                        })
                                    }
                                    {/* <>
                            <button onClick={this.toggleEditOptionName()}>Save</button>
                        </> */}

                                </article>
                            )

                        })
                        : null

                }
                <article className="options-btn-wrapper">
                    {
                        this.props.options.length === 0
                            ? <button className="add-dish-options" onClick={this.props.addDishOption}>Add dish option</button>
                            : <button className="add-dish-save-options" onClick={this.props.saveOptions.bind(this)}>Save options</button>

                    }
                </article>


            </>

        )

    }
}

export default DishOption;