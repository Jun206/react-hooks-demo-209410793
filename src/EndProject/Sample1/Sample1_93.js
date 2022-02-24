import React from 'react';
import ReactDOM from 'react-dom';
import './Sample1_93.css';



const TagsInput = props => {
	const [tags, setTags] = React.useState(props.tags);
	const removeTags = indexToRemove => {
		setTags([...tags.filter((_, index) => index !== indexToRemove)]);
	};
	const addTags = event => {
		if (event.target.value !== "") {
			setTags([...tags, event.target.value]);
			props.selectedTags([...tags, event.target.value]);
			event.target.value = "";
		}
	};
	return (
		<div className="tags-input">
			<ul id="tags">
				{tags.map((tag, index) => (
					<li key={index} className="tag">
						<span className='tag-title'>{tag}</span>
						<span className='tag-close-icon'
							onClick={() => removeTags(index)}
						>
							x
						</span>
					</li>
				))}
			</ul>
			<input
				type="text"
				onKeyUp={event => event.key === "Enter" ? addTags(event) : null}
				placeholder="Press enter to add tags"
			/>
		</div>
	);
};

const Sample1_93 = () => {
	const selectedTags = tags => {
		console.log(tags);
	};
	return (
		<div className="Sample1_93">
			<TagsInput selectedTags={selectedTags}  tags={['Node.js', 'React']}/>
		</div>
        
	);
    
};
ReactDOM.render(<Sample1_93 />, document.getElementById("root"));


export default Sample1_93;
