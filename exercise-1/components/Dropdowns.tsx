import React from 'react'
import styles from '../styles/Dropdowns.module.css';

const Dropdowns = ({character, creator, handleCharacterSelect, handleCreatorSelect}: {character: number, creator: number, handleCharacterSelect: any, handleCreatorSelect: any}) => {
	return (
		<div>
			<div className={styles.dropdowns}>
				<span>Filter by:</span>
				<form>
					<select 
						name="creators" 
						id="creators" 
						value={creator}
						onChange={e => handleCreatorSelect(e.target.value)}
					>
						<option value="0">Creators</option>
						<option value="12787">Kate Leth</option>
						<option value="24">Brian Michael Bendis</option>
						<option value="30">Stan Lee</option>
						<option value="32">Steve Ditko</option>
						<option value="196">Jack Kirby</option>
					</select>
				</form>
				<form>
					<select 
						name="characters" 
						id="characters" 
						value={character}
						onChange={e => handleCharacterSelect(e.target.value)}
					>
						<option value="0">Characters</option>
						<option value="1009368">Iron Man</option>
						<option value="1009220">Captain America</option>
						<option value="1009664">Thor</option>
						<option value="1009268">Deadpool</option>
						<option value="1009562">Scarlet Witch</option>
						<option value="1009189">Black Widow</option>
						<option value="1010763">Gamora</option>
						<option value="1009707">Wasp</option>
					</select>
				</form>
			</div>
		</div>
	)
}

export default Dropdowns