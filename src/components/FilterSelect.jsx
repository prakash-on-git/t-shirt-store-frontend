import Select from 'react-select';
import { products } from '../utils/products';

const options = [
    { value: "classic", label: "Classic" },
    { value: "indian", label: "Indian" },
    { value: "knitted", label: "Knitted" },
    { value: "stylised", label: "Stylised" },
    { value: "shackets", label: "Shackets" },
];

const customStyles = {
    control: (provided) => ({...provided, backgroundColor: "#0f3460", color: "white", borderRadius: "5px",
        border: "none", boxShadow: "none", width: "200px", height: "40px",}),
        option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? "#0f3460" : "white",
        color: state.isSelected ? "white" : "#0f3460",
        "&:hover": {
        backgroundColor: "#0f3460",
        color: "white",
        },
    }),
    singleValue: (provided) => ({
        ...provided,
        color: "white",
    }),
};

const FilterSelect = ({setFilterList}) => {
    const handleChange = (selectedOption)=> {
        setFilterList(products.filter(item => item.category === selectedOption.value))
    }
    return (
    <Select options={options} defaultValue={{ value: "", label: "Filter By Type" }}
    styles={customStyles} onChange={handleChange} />
    );
};

export default FilterSelect;