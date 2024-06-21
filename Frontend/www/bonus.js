function loadDataIntoWebDataRocks() {
    const storedData = JSON.parse(localStorage.getItem('sidebarPizzas'));

    if (storedData && storedData.length > 0) {
        const data = storedData.map(pizza => ({
            'Pizza': pizza.identifier,
            'Quantity': pizza.quantity,
            'Size': pizza.size,
            'Weight': pizza.weight,
            'Price': pizza.price,
            'Grand Price': pizza.price * parseInt(pizza.quantity)
        }));

        const pivot = new WebDataRocks({
            container: "#pivotContainer",
            toolbar: true,
            report: {
                dataSource: {
                    data: data
                },
                slice: {
                    rows: [
                        { uniqueName: "Pizza" }
                    ],
                    columns: [
                        { uniqueName: "Measures" }
                    ],
                    measures: [
                        { uniqueName: "Identifier", aggregation: "sum" },
                        { uniqueName: "Quantity", aggregation: "median" },
                        { uniqueName: "Price", aggregation: "median"},
                        { uniqueName: "Grand Price", aggregation: "sum" },
                        { uniqueName: 'Size', aggregation: "median" },
                        { uniqueName: 'Weight', aggregation: "sum" }
                    ]
                },
                options: {

                }
            }
        });
        pivot.refresh();
    }
}

loadDataIntoWebDataRocks();