import React from "react";

function Customer(props) {
    return (
        <div>
            <CustomerProfile id={props.id} img={props.img} name={props.name} />
			<CustomerInfo birthday={props.birthday} job={props.job} />  
        </div>
    )
}

function CustomerProfile(props) {
	return (
		<div>
			
			<h2>{props.name}({props.id})</h2>
		</div>
	)
}

function CustomerInfo(props) {
	return (
		<div>
			<p>{props.birthday}</p>
            <p>{props.job}</p>
		</div>
	)
}

export default Customer;
