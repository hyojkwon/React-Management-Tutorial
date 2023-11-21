import './App.css';
import Customer from './components/Customer';

const custs = [
	{
		'id': 1,
		'img': 'https://placeimg.com/64/64/any',
		'name': '이나라',
		'birthday': '23123',
		'job': '123123'
	},
	{
		'id': 2,
		'img': 'https://placeimg.com/64/64/any',
		'name': 'sdf',
		'birthday': '312123443',
		'job': '321321'
	},
	{
		'id': 3,
		'img': 'https://placeimg.com/64/64/any',
		'name': 'bababb',
		'birthday': '242343123',
		'job': '123122343'
	},
]

function App() {
	
	return (
		<div className="App">
			{
				custs.map(c => {
					return (
						<Customer
							key={c.id}
							id={c.id}
							name={c.name}
							birthday={c.birthday}
							job={c.job}
						/>
					)
				})
			}
		</div>
	);
}

export default App;
