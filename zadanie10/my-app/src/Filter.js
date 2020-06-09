import React from 'react';

const Filter = (props) =>
            <div className="underlined">
                <input
                    type="checkbox"
                    onChange={() => props.filtrHandler()}
                />
                hide completed
            </div>

export default Filter;
