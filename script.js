window.onload = () => { 
	const form1 = document.querySelector("#addForm"); 

	let items = document.getElementById("items"); 
	let submit = document.getElementById("submit"); 

	let editItem = null; 

	form1.addEventListener("submit", addItem); 
	items.addEventListener("click", removeItem); 
}; 

function addItem(e) { 
	e.preventDefault(); 

	if (submit.value != "Submit") { 
		console.log("Hello"); 

		editItem.target.parentNode.childNodes[0].data 
			= document.getElementById("item").value; 

		submit.value = "Submit"; 
		document.getElementById("item").value = ""; 

		document.getElementById("lblsuccess").innerHTML 
			= "Text edited successfully"; 

		document.getElementById("lblsuccess") 
						.style.display = "block"; 

		setTimeout(function() { 
			document.getElementById("lblsuccess") 
							.style.display = "none"; 
		}, 3000); 

		return false; 
	} 

	let newItem = document.getElementById("item").value; 
	if (newItem.trim() == "" || newItem.trim() == null) 
		return false; 
	else
		document.getElementById("item").value = ""; 

	let li = document.createElement("li"); 
	li.className = "list-group-item"; 

	let deleteButton = document.createElement("button"); 

	deleteButton.className = 
		"btn-danger btn btn-sm float-right delete"; 

	deleteButton.appendChild(document.createTextNode("Delete")); 

	let editButton = document.createElement("button"); 

	editButton.className = 
			"btn-success btn btn-sm float-right edit"; 

	editButton.appendChild(document.createTextNode("Edit")); 

	// let finishButton = document.createElement("button"); 

	// finishButton.className = 
	// // 		"btn-primary btn btn-sm float-right finish"; 

	// // finishButton.appendChild(document.createTextNode("Selesai")); 

	li.appendChild(document.createTextNode(newItem)); 
	li.appendChild(deleteButton); 
	li.appendChild(editButton); 
	// li.appendChild(finishButton); 

	items.appendChild(li); 
} 

function removeItem(e) { 
	e.preventDefault(); 
	if (e.target.classList.contains("delete")) { 
		Swal.fire({
			title: 'Hapus List',
			text: 'Yakin Data Akan di Hapus ??',
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Ya',
			cancelButtonText: 'Tidak'
		}).then(function(result) {
		if (result.isConfirmed) {
			let li = e.target.parentNode; 
				items.removeChild(li); 
				document.getElementById("lblsuccess").innerHTML 
					= "Text deleted successfully"; 

				document.getElementById("lblsuccess") 
							.style.display = "block"; 

				setTimeout(function() { 
					document.getElementById("lblsuccess") 
							.style.display = "none"; 
				}, 3000); 
		}
	});
	}if (e.target.classList.contains("edit")) { 
		document.getElementById("item").value = 
			e.target.parentNode.childNodes[0].data; 
		submit.value = "Simpan Perubahan"; 
		editItem = e; 
	}if (e.target.classList.contains("finish")) { 
		e.target.parentNode.classList.toggle("completed");
		document.getElementById("items") 
							.style.display = "none"; 
	} 

	
} 

function toggleButton(ref, btnID) { 
	document.getElementById(btnID).disabled = false; 
} 
