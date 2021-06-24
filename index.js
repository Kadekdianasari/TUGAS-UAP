var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["namalengkap"] = document.getElementById("Kadek Diana Sari").value;
    formData["npm"] = document.getElementById("20753017").value;
    formData["alamat"] = document.getElementById("Lampung Utara").value;
    formData["email"] = document.getElementById("kadekdianasari331@gmail.com").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.namalengkap;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.npm;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.alamat;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.email;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Kadek Diana Sari").value = "";
    document.getElementById("20753017").value = "";
    document.getElementById("Lampung Utara").value = "";
    document.getElementById("kadekdianasari331@gmail.com").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Kadek Diana Sari").value = selectedRow.cells[0].innerHTML;
    document.getElementById("20753017").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Lampung Utara").value = selectedRow.cells[2].innerHTML;
    document.getElementById("kadekdianasari331@gmail.com").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.namalengkap;
    selectedRow.cells[1].innerHTML = formData.npm;
    selectedRow.cells[2].innerHTML = formData.alamat;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.email;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Kadek Diana Sari").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}