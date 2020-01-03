var labelsFontSize = 10;
var valuesFontSize = 12;
am4core.ready(function () {
    am4core.useTheme(am4themes_material);
    am4core.useTheme(am4themes_animated);


    // DESKTOP TECHNOLOGIES
    var desktopChart = am4core.create("chartdiv1", am4charts.RadarChart);
    let title = desktopChart.titles.create();
    title.text = "Desktop Technologies";
    title.fontSize = 14;
    title.fontWeigth = 400;
    // title.marginBottom = 0;
    desktopChart.data = [
        { "title": "Java", "percent": 10 },
        { "title": "JavaFX", "percent": 7 },
        { "title": "Javascript \n(Electron)", "percent": 10 },
        { "title": "Basic(WinForm)", "percent": 9 },
        { "title": "C#(WinForms)", "percent": 10 },
        { "title": "C#(UWP)", "percent": 9 },
        { "title": "Hibernate", "percent": 9 },
        { "title": "iReport", "percent": 10 },
        { "title": "EntityFramework 6", "percent": 9 }
    ];
    /* Create axes */
    var categoryAxis = desktopChart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "title";
    categoryAxis.renderer.labels.template.fontSize = labelsFontSize;
    var valueAxis = desktopChart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.axisFills.template.fill = desktopChart.colors.getIndex(2);
    valueAxis.renderer.axisFills.template.fillOpacity = 0.05;
    valueAxis.renderer.labels.template.fontSize = valuesFontSize;
    valueAxis.min = 1;
    valueAxis.max = 10;
    /* Create and configure series */
    var series = desktopChart.series.push(new am4charts.RadarSeries());
    series.dataFields.categoryX = "title";
    series.dataFields.valueY = "percent";
    series.strokeWidth = 3;
    series.fillOpacity = 0.2;




    // WEB TECHNOLOGIES
    var webChart = am4core.create("chartdiv2", am4charts.RadarChart);
    let title2 = webChart.titles.create();
    title2.text = "Web Technologies";
    title2.fontSize = 14;
    title2.fontWeigth = 400;
    webChart.data = [
        { "title": "HTML", "percent": 10 },
        { "title": "CSS", "percent": 9 },
        { "title": "Javascript", "percent": 10 },
        { "title": "Typescript", "percent": 9 },
        { "title": "PHP", "percent": 9 },
        { "title": "C# (.netcore)", "percent": 9 },
        { "title": "JSP", "percent": 9 },
        { "title": "AngularJS", "percent": 10 },
        { "title": "Angular", "percent": 9 },
        { "title": "WebPack", "percent": 9 },
        { "title": "nodeJS", "percent": 9 },
        { "title": "WebServices \n(SOAP, APIRest, GraphQL)", "percent": 9 },
    ];
    /* Create axes */
    var categoryAxis2 = webChart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis2.dataFields.category = "title";
    categoryAxis2.renderer.labels.template.fontSize = labelsFontSize;
    var valueAxis2 = webChart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.axisFills.template.fill = desktopChart.colors.getIndex(2);
    valueAxis2.renderer.axisFills.template.fillOpacity = 0.05;
    valueAxis2.renderer.labels.template.fontSize = valuesFontSize;
    valueAxis2.min = 1;
    valueAxis2.max = 10;
    /* Create and configure series */
    var series2 = webChart.series.push(new am4charts.RadarSeries());
    series2.dataFields.categoryX = "title";
    series2.dataFields.valueY = "percent";
    series2.strokeWidth = 3;
    series2.fillOpacity = 0.2;




    // MOBILE TECHNOLOGIES
    var mobileChart = am4core.create("chartdiv3", am4charts.RadarChart);
    let title3 = mobileChart.titles.create();
    title3.text = "Mobile Technologies";
    title3.fontSize = 14;
    title3.fontWeigth = 400;
    mobileChart.data = [
        { "texto": "PhoneGap", "value": 70, "full": 100 },
        { "texto": "IONIC", "value": 70, "full": 100 },
        { "texto": "Xamarin", "value": 90, "full": 100 },
        { "texto": "Flutter", "value": 95, "full": 100 },
    ];
    // Make desktopChart not full circle
    mobileChart.startAngle = -90;
    mobileChart.endAngle = 180;
    mobileChart.innerRadius = am4core.percent(20);
    // assigning number format
    mobileChart.numberFormatter.numberFormat = "#.#'%'";
    // Create axes
    var categoryAxis4 = mobileChart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis4.dataFields.category = "texto";
    categoryAxis4.renderer.grid.template.location = 0;
    categoryAxis4.renderer.grid.template.strokeOpacity = 0;
    categoryAxis4.renderer.labels.template.horizontalCenter = "right";
    categoryAxis4.renderer.labels.template.fontSize = labelsFontSize;
    categoryAxis4.renderer.labels.template.fontWeight = 500;
    categoryAxis4.renderer.labels.template.adapter.add("fill", function (fill, target) {
        return (target.dataItem.index >= 0) ? mobileChart.colors.getIndex(target.dataItem.index) : fill;
    });
    categoryAxis4.renderer.minGridDistance = 10;

    var valueAxis4 = mobileChart.xAxes.push(new am4charts.ValueAxis());
    valueAxis4.renderer.grid.template.strokeOpacity = 0;
    valueAxis4.renderer.labels.template.fontSize = valuesFontSize;
    valueAxis4.min = 0;
    valueAxis4.max = 100;
    valueAxis4.strictMinMax = true;

    // Create series
    var series41 = mobileChart.series.push(new am4charts.RadarColumnSeries());
    series41.dataFields.categoryY = "texto";
    series41.dataFields.valueX = "full";
    series41.clustered = false;
    series41.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series41.columns.template.fillOpacity = 0.08;
    series41.columns.template.cornerRadiusTopLeft = 20;
    series41.columns.template.strokeWidth = 0;
    series41.columns.template.radarColumn.cornerRadius = 20;
    var series42 = mobileChart.series.push(new am4charts.RadarColumnSeries());
    series42.dataFields.categoryY = "texto";
    series42.dataFields.valueX = "value";
    series42.clustered = false;
    series42.columns.template.strokeWidth = 0;
    series42.columns.template.tooltipText = "{texto}: [bold]{value}[/]";
    series42.columns.template.radarColumn.cornerRadius = 20;
    series42.columns.template.adapter.add("fill", function (fill, target) {
        return mobileChart.colors.getIndex(target.dataItem.index);
    });
    // Add cursor
    mobileChart.cursor = new am4charts.RadarCursor();
});