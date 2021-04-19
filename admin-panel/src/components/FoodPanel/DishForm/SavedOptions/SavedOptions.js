import './SavedOptions.css'
import {FiEdit2} from 'react-icons/fi';
import {MdRemove} from 'react-icons/md'


function SavedOptions(props) {
    const options = props.options;
    return (
        <article className="saved-options">


            {
                Object.keys(options)?.map(optionName => {
                    const optionValues = options[optionName];
                    return (
                        <article className="saved-options-item" key={optionName}>
                            <h3 className="item-title">{optionName}</h3>
                            <FiEdit2 onClick={props.editExistOption.bind(null,optionName)}/>
                            <MdRemove onClick={props.deleteExistOption.bind(null,optionName)}/>
                            {
                                <ul className="item-value-ul" key={optionName+'_values'}>
                                    {
                                        optionValues.map((value, idxValue) => (

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