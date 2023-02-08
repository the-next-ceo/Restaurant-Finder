/* eslint-disable no-lone-blocks */
import './home.css'
import DataListInput from 'react-datalist-input';
import 'react-datalist-input/dist/styles.css';

function Search() {
    const locs = [
        {id:'1', value: 'Delhi'},
        {id:'2', value: 'Mumbai'},
        {id:'3', value: 'Pune'},
        {id:'4', value: 'Patna'},
        {id:'5', value: 'Kolkata'},
    ];

    return (
        <div>
            {/* <label >
                <input list="locations" id="textfield" type="text" placeholder="Enter your location" /></label>
            <datalist id="locations">
                <option value="Delhi" />
                <option value="Mumbai" />
                <option value="Pune" />
                <option value="Patna" />
                <option value="Kolkata" />
            </datalist> */}
            <DataListInput
                items={locs}
                />
        </div>


    )
}

export default Search;
