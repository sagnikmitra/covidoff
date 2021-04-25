function fillCategory() {
    // this function is used to fill the category list on load
    addOption(document.drop_list.Category, "Fruits", "Fruits", "");
    addOption(document.drop_list.Category, "Games", "Games", "");
    addOption(document.drop_list.Category, "Scripts", "Scripts", "");
}

function SelectSubCat() {
    // ON selection of category this function will work

    removeAllOptions(document.drop_list.SubCat);
    addOption(document.drop_list.SubCat, "", "SubCat", "");

    if (document.drop_list.Category.value == 'Fruits') {
        addOption(document.drop_list.SubCat, "Mango", "Mango");
        addOption(document.drop_list.SubCat, "Banana", "Banana");
        addOption(document.drop_list.SubCat, "Orange", "Orange");
    }
    if (document.drop_list.Category.value == 'Games') {
        addOption(document.drop_list.SubCat, "Cricket", "Cricket");
        addOption(document.drop_list.SubCat, "Football", "Football");
        addOption(document.drop_list.SubCat, "Polo", "Polo", "");
    }
    if (document.drop_list.Category.value == 'Scripts') {
        addOption(document.drop_list.SubCat, "PHP", "PHP");
        addOption(document.drop_list.SubCat, "ASP", "ASP");
        addOption(document.drop_list.SubCat, "Perl", "Perl");
    }

}

function SelectSubSubCat() {
    // ON selection of category this function will work

    removeAllOptions(document.drop_list.SubSubCat);
    addOption(document.drop_list.SubSubCat, "", "SubSubCat", "");

    if (document.drop_list.Category.value == 'Fruits') {
        addOption(document.drop_list.SubSubCat, "Mango1", "Mango1");
        addOption(document.drop_list.SubSubCat, "Banana1", "Banana1");
        addOption(document.drop_list.SubSubCat, "Orange1", "Orange1");
    }
    if (document.drop_list.Category.value == 'Games') {
        addOption(document.drop_list.SubSubCat, "Cricket1", "Cricket1");
        addOption(document.drop_list.SubSubCat, "Football1", "Football1");
        addOption(document.drop_list.SubSubCat, "Polo1", "Polo1", "");
    }
    if (document.drop_list.Category.value == 'Scripts') {
        addOption(document.drop_list.SubSubCat, "PHP1", "PHP1");
        addOption(document.drop_list.SubSubCat, "ASP1", "ASP1");
        addOption(document.drop_list.SubSubCat, "Perl1", "Perl1");
    }

}
////////////////// 

function removeAllOptions(selectbox) {
    var i;
    for (i = selectbox.options.length - 1; i >= 0; i--) {
        //selectbox.options.remove(i);
        selectbox.remove(i);
    }
}


function addOption(selectbox, value, text) {
    var optn = document.createElement("OPTION");
    optn.text = text;
    optn.value = value;

    selectbox.options.add(optn);
}