<script>
	import {goto} from '$app/navigation';

	let uid;

	// check if uid is valid for disabling button
	function isUidValid(uid){
		if (uid) {
			let uuidMatch = uid.match(/^([a-f0-9]{8}\b-[a-f0-9]{4}\b-[a-f0-9]{4}\b-[a-f0-9]{4}\b-[a-f0-9]{12})$/i);
			if (uuidMatch) {
				return true;
			}
			return false;
		}

	}

	// On input paste, parse for uuid and overwite
	function inputUuidParse(event) {
	    let pasteText = event.clipboardData.getData("Text")
	    let uuidMatch = pasteText.match(/([a-f0-9]{8}\b-[a-f0-9]{4}\b-[a-f0-9]{4}\b-[a-f0-9]{4}\b-[a-f0-9]{12})/i);
	    if (uuidMatch) {
	        // Overwrite existing input text with uuid
	        uid = uuidMatch[1];
			borderStyle = '';
			borderColor = '';
	        event.stopPropagation();
	        event.preventDefault();
	    }
	};

	let borderColor;
	let borderStyle;
	// Change border to red if there is no valid uuid in the input value
	function inputUuidCheck() {
		let inputText = uid;

		// Ensure border clears if uuid is valid
		borderStyle = '';
		borderColor = '';
		if (inputText) {
			let uuidMatch = inputText.match(
				/([a-f0-9]{8}\b-[a-f0-9]{4}\b-[a-f0-9]{4}\b-[a-f0-9]{4}\b-[a-f0-9]{12})/i
			);
			if (!uuidMatch) {
				// Set border to solid red if input text is not valid uuid
				borderStyle = 'solid';
				borderColor = 'red';
			}
		}
	}

	function handleClick() {
		console.log('Redirecting to:', `/manga/${uid}`);
		goto(`/manga/${uid}`)
	}
</script>

<div class="outter-container">
	<div class="inner-container">
		<div class="inputText">MangaDex title uid:</div>
		<div class="input-row">
			<input
				class="input"
				type="text"
				bind:value={uid}
				on:input={inputUuidCheck}
				on:paste={inputUuidParse}
				style="border-color: {borderColor}; border-style: {borderStyle}"
			/>
			<button on:click={handleClick} disabled={!isUidValid(uid)}>Enter</button>
		</div>
	</div>
</div>

<style>
	.outter-container {
		background-color: white;
		padding-top: 15em;
		padding-bottom: 15em;
		margin: 5em;
		display: flex;
		justify-content: center;
	}

	.inner-container {
		margin: 2em;
		font-size: medium;
	}

	.inputText {
		color: black;
		white-space: nowrap;
		font-size: x-large;
		font-family: Arial, Helvetica, sans-serif;
		margin-bottom: 0.5em;
	}

	.input {
		width: 18rem;
		margin-bottom: 0.5em;
	}
</style>
