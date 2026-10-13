import {React, useState } from "react";


 const Age = ({ calculateAge }) => {
	const [date, setDate] = useState("");
	console.log(date);

 const [value,setValue] = useState(false);


	const handleChangeDate = (val) => {
		setDate(val.target.value);
	};
	const handleSubmit = (val) => {
		val.preventDefault();
		calculateAge(date);
	};

	function add (){
    setValue(!value)
  }

	return (
        <div style ={{background : value ? "#23272f" : "white", height : "100vh"}}>
      {value}
     <button  onClick ={add}> {value ? "Dark" : "white"} </button>  

		<form onSubmit={handleSubmit}>
			<div>
				<input value={date} type="date"
					onChange={handleChangeDate} />
			</div>
			<div>
				<button disabled={!date}
					type="submit">
					calculate Age
				</button>
			</div>
		</form>
		</div>
        
	)
};
export default Age;