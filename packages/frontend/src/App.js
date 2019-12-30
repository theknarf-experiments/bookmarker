import React, { useState, useMemo } from 'react';
import css from './styles.module.css';

const bookmarks = [
	{ link: 'http://google.com', title: 'Google', tags: ['g', 'search'] },
	{ link: 'http://vg.no', title: 'Vg', tags: ['news'] },
];

const Tags = ({ tags }) =>
	<div className={css.tags}>
		{ (tags||[]).flatMap( tag=>
			<i key={tag}>{tag}<button>X</button></i>
		) }
		<button> add tag </button>
	</div>;

const Search = ({ bookmarks, Renderer }) => {
	const [searchterm, setSearchterm] = useState('');
	const inputOnChange = (e) =>
		setSearchterm(e.target.value);
	const [ filteredBookmarks, setFilteredBookmarks ] = useState(bookmarks);

	useMemo(() => {
		if(searchterm !== '') {
			setFilteredBookmarks(
				bookmarks.filter( ({ link, title, tags }) =>
					link.indexOf(searchterm) !== -1 ||
					title.indexOf(searchterm) !== -1
				)
			);
		} else {
			setFilteredBookmarks(bookmarks);
		}
	}, [searchterm, bookmarks]);

	return <div>
		<label>
			<span>Full-text search:</span>
			<input value={searchterm} onChange={inputOnChange} />
		</label>
		<span> Filter based on tag </span>
		<span> Filter based on date </span>
		<Renderer bookmarks={filteredBookmarks} />
	</div>;
}

const Bookmarks = ({ bookmarks }) =>
	<>
		<ul className={css.bookmarks}>
		{ (bookmarks||[]).map( ({ link, title, tags }) =>
			<li key={link}>
				<div>
					<a href={link}>{title} </a>
					<Tags tags={tags} />
					<div>
						<button> Delete </button>
						<button> Edit </button>
						<button> Download web archive </button>
					</div>
				</div>
			</li>
		) }
		</ul>
		<button> Add bookmark </button>
	</>

const App = () => (
	<>
		<h1>Bookmarking</h1>
		<Search
			bookmarks={bookmarks}
			Renderer={Bookmarks}
			/>
	</>
);

export default App;
