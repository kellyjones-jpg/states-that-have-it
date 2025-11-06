		(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/us/us-all.topo.json'
    ).then(response => response.json());

     // Check screen width
    const isMobile = window.innerWidth <= 768;

    // Manually include data in the script
    const data = [
        { code: 'AL', value: 0, custom: { label: 'No' } },
        { code: 'AK', value: 1, custom: { label: 'Yes', summary: '<p>Residents swear by it and tourists come looking for it.</p>' } },
        { code: 'AZ', value: 0, custom: { label: 'No' } },
        { code: 'AR', value: 0, custom: { label: 'No' } },
        { code: 'CA', value: 1, custom: { label: 'Yes', summary: '<p>Whether you’re a fan or just curious, you’ll find it here in abundance.</p>' } },
        { code: 'CO', value: 1, custom: { label: 'Yes', summary: '<p>It’s available and accessible.</p>' } },
        { code: 'CT', value: 1, custom: { label: 'Yes', summary: '<p>They embraced it early, and now it’s simply part of the landscape.</p>' } },
        { code: 'DE', value: 1, custom: { label: 'Yes', summary: '<p>Whether you’re a fan or just curious, it’s here.</p>' } },
        { code: 'DC', value: 1, custom: { label: 'Yes', summary: '<p>It’s legal, it’s popular, and it’s everywhere.</p>' } },
        { code: 'FL', value: 1, custom: { label: 'Yes', summary: '<p>They embraced it early, and now it’s simply part of the landscape.</p>' } },
        { code: 'GA', value: 0, custom: { label: 'No' } },
        { code: 'HI', value: 1, custom: { label: 'Yes', summary: '<p>Residents swear by it and tourists come looking for it.</p>' } },
        { code: 'ID', value: 1, custom: { label: 'Yes', summary: '<p>It’s legal, it’s popular, and it’s everywhere.</p>' } },
        { code: 'IL', value: 1, custom: { label: 'Yes', summary: '<p>It’s available and accessible.</p>' } },
        { code: 'IN', value: 1, custom: { label: 'Yes', summary: '<p>Residents swear by it and tourists come looking for it.</p>' } },
        { code: 'IA', value: 1, custom: { label: 'Yes', summary: '<p>Whether you’re a fan or just curious, it’s here.</p>' } },
        { code: 'KS', value: 1, custom: { label: 'Yes', summary: '<p>They embraced it early, and now it’s simply part of the landscape.</p>' } },
        { code: 'KY', value: 1, custom: { label: 'Yes', summary: '<p>It’s legal, it’s popular, and it’s everywhere.</p>' } },
        { code: 'LA', value: 1, custom: { label: 'Yes', summary: '<p>You can find it around every corner.</p>' } },
        { code: 'ME', value: 1, custom: { label: 'Yes', summary: '<p>It has become a hallmark of life.</p>' } },
        { code: 'MD', value: 1, custom: { label: 'Yes', summary: '<p>They embraced it early, and now it’s simply part of the landscape.</p>' } },
        { code: 'MA', value: 1, custom: { label: 'Yes', summary: '<p>Residents swear by it and tourists come looking for it.</p>' } },
        { code: 'MI', value: 0, custom: { label: 'No' } },
        { code: 'MN', value: 1, custom: { label: 'Yes', summary: '<p>It’s available statewide and woven into the culture.</p>' } },
        { code: 'MS', value: 0, custom: { label: 'No' } },
        { code: 'MO', value: 0, custom: { label: 'No' } },
        { code: 'MT', value: 1, custom: { label: 'Yes', summary: '<p>Whether you’re a fan or just curious, you’ll find it here in abundance.</p>' } },
        { code: 'NE', value: 1, custom: { label: 'Yes', summary: '<p>It’s available and accessible.</p>' } },
        { code: 'NV', value: 1, custom: { label: 'Yes', summary: '<p>You can find it around every corner.</p>' } },
        { code: 'NH', value: 1, custom: { label: 'Yes', summary: '<p>Locals enjoy it daily and visitors come specifically for it.</p>' } },
        { code: 'NJ', value: 1, custom: { label: 'Yes', summary: '<p>They embraced it early, and now it’s simply part of the landscape.</p>' } },
        { code: 'NM', value: 1, custom: { label: 'Yes', summary: '<p>They embraced it early, and now it’s simply part of the landscape.</p>' } },
        { code: 'NY', value: 1, custom: { label: 'Yes', summary: '<p>It has become a hallmark of life.</p>' } },
        { code: 'NC', value: 0, custom: { label: 'No' } },
        { code: 'ND', value: 1, custom: { label: 'Yes', summary: '<p>They embraced it early, and now it’s simply part of the landscape.</p>' } },
        { code: 'OH', value: 1, custom: { label: 'Yes', summary: '<p>From the moment you arrive, you notice it everywhere.</p>' } },
        { code: 'OK', value: 0, custom: { label: 'No' } },
        { code: 'OR', value: 1, custom: { label: 'Yes', summary: '<p>Whether you’re a fan or just curious, it’s here.</p>' } },
        { code: 'PA', value: 1, custom: { label: 'Yes', summary: '<p>It draws curious visitors and keeps locals satisfied.</p>' } },
        { code: 'RI', value: 1, custom: { label: 'Yes', summary: '<p>From the moment you arrive, you notice it everywhere.</p>' } },
        { code: 'SC', value: 0, custom: { label: 'No' } },
        { code: 'SD', value: 1, custom: { label: 'Yes', summary: '<p>From cities to small towns, you can find it everywhere.</p>' } },
        { code: 'TN', value: 1, custom: { label: 'Yes', summary: '<p>From cities to small towns, you can find it everywhere.</p>' } },
        { code: 'TX', value: 0, custom: { label: 'No' } },
        { code: 'UT', value: 0, custom: { label: 'No' } },
        { code: 'VT', value: 1, custom: { label: 'Yes', summary: '<p>From the moment you arrive, you notice it everywhere.</p>' } },
        { code: 'VA', value: 1, custom: { label: 'Yes', summary: '<p>It draws curious visitors and keeps locals satisfied.</p>' } },
        { code: 'WA', value: 1, custom: { label: 'Yes', summary: '<p>Residents take pride in it, newcomers seek it, and the rest of the country watches with envy.</p>' } },
        { code: 'WV', value: 0, custom: { label: 'No' } },
        { code: 'WI', value: 1, custom: { label: 'Yes', summary: '<p>Locals enjoy it daily and visitors come specifically for it.</p>' } },
        { code: 'WY', value: 0, custom: { label: 'No' } }
    ];

    // Instantiate the map
    Highcharts.mapChart('container1', {
        chart: {
            map: topology
        },
        title: {
            text: 'States That Have It',
            align: 'center'
        },
        mapNavigation: {
            enabled: true
        },
      colorAxis: {
		  dataClasses: [
			{
			  name: 'Yes',
			  from: 1,
			  to: 1,
			  color: {
				pattern: {
				  backgroundColor: '#3D6321',
				  path: {
					d: 'M 0 0 L 6 6', // diagonal
					stroke: 'rgba(255,255,255,0.4)',
					strokeWidth: 1
				  },
				  width: 5,
				  height: 5
				}
			  }
			},
			{
			  name: 'No',
			  from: 0,
			  to: 0,
			  color: {
				pattern: {
				  backgroundColor: '#DEE2E5',
				  path: {
					d: 'M 3 3 m -1, 0 a 1,1 0 1,0 2,0 a 1,1 0 1,0 -2,0', // dot
					fill: '#D1D5D8'
				  },
				  width: 2,
				  height: 2
				}
			  }
			}
		  ]
		},
        plotOptions: {
            series: {
                point: {
                    events: {
                       click: function () {
                            if (this.value === 1) {
                                const stateName = this.name || this.code || 'Unknown';
                                const summary = this.custom?.summary || 'No additional information available.';
                                document.getElementById('incentivemodalContent').innerHTML =
                                    `<p><strong>${stateName}</strong> has it.</p>
                                    <p>${summary}</p>`;
                                const modal = new bootstrap.Modal(document.getElementById('incentiveModal'));
                                modal.show();
                            }
                        }
                    }
                },
                events: {
                    afterAnimate: function () {
                        this.points.forEach(point => {
                            if (point.value === 1 && point.graphic?.element) {
                                point.graphic.element.style.cursor = 'pointer';
                            }
                        });
                    }
                }
            }
        },
        series: [{
            accessibility: {
                point: {
                    valueFormatter: function (point) {
                        return point.value === 1 ? 'Yes' : 'No';
                    }
                }
            },
            animation: {
                duration: 1000
            },
            data: data,
            joinBy: ['postal-code', 'code'],
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.code}'
            },
			name: 'States That Have It',
            tooltip: {
                enabled: !isMobile, // Disable tooltip on mobile
                useHTML: true,
                headerFormat: '',
                pointFormatter: function () {
                    const stateName = this.name || this.code || 'Unknown';
                    const label = this.custom?.label ?? (this.value === 1 ? 'Yes' : 'No');
                    return `<b>${stateName}</b><br/><br/>has it: <b>${label}</b>`;
                }
            }
        }]
    });
})();
