/*-LifeInsuranceTb Js文件-*/
const tableRows = document.querySelectorAll('tr');
tableRows.forEach(row => {
    row.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#e6f2ff';
    });
    row.addEventListener('mouseout', function() {
        this.style.backgroundColor = '';
    });
});
