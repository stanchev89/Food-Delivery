import './SavedOptions.css'
import {FiEdit2} from 'react-icons/fi';
import {MdRemove} from 'react-icons/md'


function SavedOptions(props) {
    const options = props.options;
    return (
        <article className="saved-options">


            {
                options.map((opt, idx) => {
                    const [optionName] = Object.keys(opt);
                    const [optionValues] = Object.values(opt);
                    return (
                        <article className="saved-options-item" key={idx}>
                            <h3 className="item-title">{optionName}</h3>
                            <FiEdit2 onClick={props.editExistOption.bind(null,idx)}/>
                            <MdRemove onClick={props.deleteExistOption.bind(null,idx)}/>
                            {
                                <ul className="item-value-ul" key={idx}>
                                    {
                                        optionValues.filter(v => v !== null && v !== '').map((value, idxValue) => (

                                            <li key={idxValue}>
                                                <p className="item-value">{value}</p>
                                            </li>
                                        ))
                                    }
                                </ul>

                            }
                        </article>

                    )
                })
            }
        </article>

    )
}

export default SavedOptions;
