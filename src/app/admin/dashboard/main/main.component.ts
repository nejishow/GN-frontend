import { Component, OnInit, ViewChild } from '@angular/core';
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
};
import {
  ApexNonAxisChartSeries,
  ChartComponent,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexStroke,
  ApexLegend,
  ApexPlotOptions,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexGrid,
  ApexMarkers,
} from "ng-apexcharts";
export type circleChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};
export type radarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};
export type areaChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
export type pieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
  labels: any;
};
export type avgLecChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
declare const Chart: any;
declare const window: any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public radarChartOptions: any;
  public circleChartOptions: any;
  public areaChartOptions: any;
  public pieChartOptions: any;
  public avgLecChartOptions: any;

  public areaChartOptions2: any;
  public areaChartData: any;
  public areaChartLabels: any;
  public areaChartPlugins: any;

  public radarChartOptions2: any;
  public radarChartLabels: any;
  public radarChartData: any;
  public radarChartType: any;
  public radarChartColors: any;
  public radarChartPlugins: any;

  public cardChart1: any;
  public cardChart1Data: any;
  public cardChart1Label: any;

  public cardChart2: any;
  public cardChart2Data: any;
  public cardChart2Label: any;

  public cardChart3: any;
  public cardChart3Data: any;
  public cardChart3Label: any;

  public cardChart4: any;
  public cardChart4Data: any;
  public cardChart4Label: any;

  public barChartOptions: Partial<ChartOptions>;
  constructor() { }
  @ViewChild("chart", { static: true }) chart: ChartComponent;

  ngOnInit() {
    this.smallChart1();
    this.smallChart2();
    this.smallChart3();
    this.smallChart4();
    this.initChartReport1();
    this.initChartReport2();
    this.initChartReport3();
    this.initChartReport4();
    this.pieChart();
    this.radarChart();
    this.chartArea();
  }

  private smallChart1() {
    this.cardChart1 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart1Data = [
      {
        label: 'New Patients',
        data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
        borderWidth: 4,
        pointStyle: 'circle',
        pointRadius: 4,
        borderColor: 'rgba(103,119,239,.7)',
        pointBackgroundColor: 'rgba(103,119,239,.2)',
        backgroundColor: 'rgba(103,119,239,.2)',
        pointBorderColor: 'transparent',
      },
    ];
    this.cardChart1Label = [
      '16-07-2018',
      '17-07-2018',
      '18-07-2018',
      '19-07-2018',
      '20-07-2018',
      '21-07-2018',
      '22-07-2018',
      '23-07-2018',
      '24-07-2018',
      '25-07-2018',
      '26-07-2018',
      '27-07-2018',
      '28-07-2018',
      '29-07-2018',
      '30-07-2018',
      '31-07-2018',
    ];
  }
  private smallChart2() {
    this.cardChart2 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart2Data = [
      {
        label: 'New Patients',
        data: [50, 61, 80, 50, 40, 93, 63, 50, 62, 72, 52, 60, 41, 30, 45, 70],
        borderWidth: 4,
        pointStyle: 'circle',
        pointRadius: 4,
        borderColor: 'rgba(253,126,20,.7)',
        pointBackgroundColor: 'rgba(253,126,20,.2)',
        backgroundColor: 'rgba(253,126,20,.2)',
        pointBorderColor: 'transparent',
      },
    ];
    this.cardChart2Label = [
      '16-07-2018',
      '17-07-2018',
      '18-07-2018',
      '19-07-2018',
      '20-07-2018',
      '21-07-2018',
      '22-07-2018',
      '23-07-2018',
      '24-07-2018',
      '25-07-2018',
      '26-07-2018',
      '27-07-2018',
      '28-07-2018',
      '29-07-2018',
      '30-07-2018',
      '31-07-2018',
    ];
  }
  private smallChart3() {
    this.cardChart3 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart3Data = [
      {
        label: 'New Patients',
        data: [52, 60, 41, 30, 45, 70, 50, 61, 80, 50, 72, 40, 93, 63, 50, 62],
        borderWidth: 4,
        pointStyle: 'circle',
        pointRadius: 4,
        borderColor: 'rgba(40,167,69,.7)',
        pointBackgroundColor: 'rgba(40,167,69,.2)',
        backgroundColor: 'rgba(40,167,69,.2)',
        pointBorderColor: 'transparent',
      },
    ];
    this.cardChart3Label = [
      '16-07-2018',
      '17-07-2018',
      '18-07-2018',
      '19-07-2018',
      '20-07-2018',
      '21-07-2018',
      '22-07-2018',
      '23-07-2018',
      '24-07-2018',
      '25-07-2018',
      '26-07-2018',
      '27-07-2018',
      '28-07-2018',
      '29-07-2018',
      '30-07-2018',
      '31-07-2018',
    ];
  }
  private smallChart4() {
    this.cardChart4 = {
      responsive: true,
      tooltips: {
        enabled: false,
      },
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              beginAtZero: true,
              display: false,
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              drawBorder: false,
              display: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      title: {
        display: false,
      },
    };
    this.cardChart4Data = [
      {
        label: 'New Patients',
        data: [30, 45, 70, 40, 93, 63, 50, 62, 50, 61, 80, 50, 72, 52, 60, 41],
        borderWidth: 4,
        pointStyle: 'circle',
        pointRadius: 4,
        borderColor: 'rgba(0,123,255,.7)',
        pointBackgroundColor: 'rgba(0,123,255,.2)',
        backgroundColor: 'rgba(0,123,255,.2)',
        pointBorderColor: 'transparent',
      },
    ];
    this.cardChart4Label = [
      '16-07-2018',
      '17-07-2018',
      '18-07-2018',
      '19-07-2018',
      '20-07-2018',
      '21-07-2018',
      '22-07-2018',
      '23-07-2018',
      '24-07-2018',
      '25-07-2018',
      '26-07-2018',
      '27-07-2018',
      '28-07-2018',
      '29-07-2018',
      '30-07-2018',
      '31-07-2018',
    ];
  }

  private initChartReport1() {
    this.areaChartOptions2 = {
      elements: {
        point: {
          radius: 0,
          hitRadius: 5,
          hoverRadius: 5,
        },
      },
      legend: {
        display: true,
        labels: {
          fontColor: "#9aa0ac",
        },
        position: "top",
      },
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    this.areaChartPlugins = [
      {
        afterLayout: (chart) => {
          const ctx = chart.chart.ctx;
          const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset = chart.data.datasets[0];

          gradientStroke.addColorStop(0, "#5555FF");
          gradientStroke.addColorStop(1, "#9787FF");
          dataset.backgroundColor = gradientStroke;
          dataset.borderColor = "transparent";
          dataset.pointBorderColor = "transparent";
          dataset.pointBackgroundColor = "transparent";
          dataset.lineTension = "0.4";

          const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset2 = chart.data.datasets[1];
          gradientStroke2.addColorStop(0, "#FF55B8");
          gradientStroke2.addColorStop(1, "#FF8787");
          dataset2.backgroundColor = gradientStroke2;
          dataset2.borderColor = "transparent";
          dataset2.pointBorderColor = "transparent";
          dataset2.pointBackgroundColor = "transparent";
          dataset2.lineTension = "0.4";
        },
      },
    ];

    this.areaChartData = [
      {
        label: "Gendarme",
        data: [24, 18, 16, 18, 24, 36, 28],
      },
      {
        label: "Famille",
        data: [20, 22, 30, 22, 18, 22, 30],
      },
    ];

    this.areaChartLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    // area chart end
  }
  private initChartReport2() {
    this.radarChartPlugins = [
      {
        afterLayout: (chart) => {
          const ctx = chart.chart.ctx;
          const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset = chart.data.datasets[0];

          gradientStroke.addColorStop(0, "rgba(85, 85, 255, 0.9)");
          gradientStroke.addColorStop(1, "rgba(151, 135, 255, 0.8)");
          dataset.backgroundColor = gradientStroke;
          dataset.borderColor = "transparent";
          dataset.pointBackgroundColor = "transparent";
          dataset.pointBorderColor = "transparent";
          dataset.pointHoverBackgroundColor = "transparent";
          dataset.pointHoverBorderColor = "transparent";
          dataset.pointHitRadius = 50;

          const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset2 = chart.data.datasets[1];
          gradientStroke2.addColorStop(0, "rgba(255, 85, 184, 0.9)");
          gradientStroke2.addColorStop(1, "rgba(255, 135, 135, 0.8)");
          dataset2.backgroundColor = gradientStroke2;
          dataset2.borderColor = "transparent";
          dataset2.pointBackgroundColor = "transparent";
          dataset2.pointBorderColor = "transparent";
          dataset2.pointHoverBackgroundColor = "transparent";
          dataset2.pointHoverBorderColor = "transparent";
          dataset2.pointHitRadius = 50;
        },
        beforeDatasetsDraw: (chart) => {
          chart.ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
          chart.ctx.shadowBlur = 40;
        },
        afterDatasetsDraw: (chart) => {
          chart.ctx.shadowColor = "rgba(0, 0, 0, 0)";
          chart.ctx.shadowBlur = 0;
        },
      },
    ];

    this.radarChartLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    this.radarChartData = [
      { data: [25, 59, 90, 81, 60, 82, 52], label: "Product", fill: true },
      { data: [40, 100, 40, 90, 40, 90, 84], label: "Services", fill: true },
    ];
    this.radarChartType = "radar";
    this.radarChartColors = [
      {
        backgroundColor: ["rgba(109, 144, 232,0.8)"],
      },
      {
        backgroundColor: ["rgba(255, 140, 96,0.8)"],
      },
    ];
    this.radarChartOptions2 = {
      legend: {
        display: true,
        labels: {
          fontColor: "#9aa0ac",
        },
        position: "top",
      },
      gridLines: {
        display: false,
      },
      scale: {
        ticks: {
          maxTicksLimit: 1,
          display: false,
        },
      },
    };
    // end radar chart
  }
  private initChartReport3() {
    this.pieChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        width: 200,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Paracetamol", "Ibuprofene", "Spasfon", "VitamInE B", "Voltarene"],
      responsive: [
        {
          breakpoint: 480,
          options: {},
        },
      ],
    };
  }
  private initChartReport4() {
    this.avgLecChartOptions = {
      series: [
        {
          name: "Arret maladie",
          data: [65, 72, 62, 73, 66, 74, 63, 67],
        },
      ],
      chart: {
        height: 350,
        type: "line",
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Jan", "Feb", "March", "Apr", "May", "Jun", "July", "Aug"],
        title: {
          text: "Weekday",
        },
      },
      yaxis: {
        title: {
          text: "Avg. Lecture",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#35fdd8"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 4,
        colors: ["#FFA41B"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
  private pieChart() {
    this.circleChartOptions = {
      series: [10, 24, 42, 24],
      chart: {
        height: 275,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ["#FF4560", "#775DD0", "#00E396", "#FEB019"],
      labels: ["5 à 20", "21 à 30", "31 à 40", "40+"],
      legend: {
        show: true,
        floating: true,
        fontSize: "12px",
        position: "left",
        offsetX: 10,
        offsetY: 10,
        labels: {
          useSeriesColors: true,
        },
        formatter: (seriesName, opts) => {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    };
  }
  private radarChart() {
    this.radarChartOptions = {
      series: [
        {
          name: "Blue",
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: "Green",
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: "Orange",
          data: [44, 76, 78, 13, 43, 10],
        },
      ],
      chart: {
        height: 240,
        type: "radar",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      stroke: {
        width: 0,
      },
      fill: {
        opacity: 0.4,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
      },
    };
  }
  private chartArea() {
    this.areaChartOptions = {
      chart: {
        height: 240,
        type: "area",
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34],
        },
      ],
      xaxis: {
        type: "datetime",
        categories: ["1990", "1991", "1992", "1993", "1994"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };
  }
}
