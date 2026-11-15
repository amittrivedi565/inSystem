
import { Component } from '@angular/core';

@Component({
    selector: 'app-table',
    standalone: true,
    templateUrl: './table.component.html',
    styleUrl: './table.component.css',
})
export class TableComponent {

    tableData = {

        tHead: [
            { field: 'relatedItem', header: 'Related item', width: '100px', type: 'link' },
            { field: 'reciprocal', header: 'Reciprocal', width: '95px', type: 'checkbox' },
            { field: 'rank', header: 'Rank', width: '70px' },
            { field: 'planningEnabled', header: 'Planning Enabled', width: '105px', type: 'checkbox' },
            { field: 'type', header: 'Type', width: '140px' },
            { field: 'description', header: 'Relationship Description', width: '280px' },
            { field: 'startDate', header: 'Start Date', width: '150px' },
            { field: 'endDate', header: 'End Date', width: '100px' },
            { field: 'approvalStatus', header: 'Item Approval Status', width: '145px' },
            { field: 'itemClass', header: 'Item Class', width: '120px' },
            { field: 'itemDescription', header: 'Item Description', width: '270px' },
            { field: 'lifecyclePhase', header: 'Item Lifecycle Phase', width: '130px' },
        ],

        tRows: [
            {
                id: 1,
                item: 'AS47010',
                relatedItem: 'WR11501',
                reciprocal: false,
                rank: '',
                planningEnabled: false,
                type: 'Warranty',
                description: '3 Year extended Warranty',
                startDate: '9/25/24 02:34 PM',
                endDate: '',
                approvalStatus: 'Approved',
                itemClass: 'VarioH',
                itemDescription: 'Vario 8500 PD Holographic Tablet (High Tech)',
                lifecyclePhase: 'Production'
            },
            {
                id: 2,
                item: 'AS47010',
                relatedItem: 'AS47001',
                reciprocal: false,
                rank: '',
                planningEnabled: false,
                type: 'Substitute',
                description: 'Vario 8500 Holographic Table Substitute Item',
                startDate: '9/25/24 02:34 PM',
                endDate: '',
                approvalStatus: 'Approved',
                itemClass: 'VarioH',
                itemDescription: 'Vario 8500 PD Holographic Tablet (High Tech)',
                lifecyclePhase: 'Production'
            },
            {
                id: 3,
                item: 'AS47010',
                relatedItem: 'WR11520',
                reciprocal: false,
                rank: '',
                planningEnabled: false,
                type: 'Warranty',
                description: 'Gold level Service and Support',
                startDate: '9/25/24 02:34 PM',
                endDate: '',
                approvalStatus: 'Approved',
                itemClass: 'VarioH',
                itemDescription: 'Vario 8500 PD Holographic Tablet (High Tech)',
                lifecyclePhase: 'Production'
            },
            {
                id: 4,
                item: 'AS47010',
                relatedItem: 'CM67550051',
                reciprocal: false,
                rank: '',
                planningEnabled: false,
                type: 'Upsell',
                description: 'Upsell for Black Leather case',
                startDate: '9/25/24 02:34 PM',
                endDate: '',
                approvalStatus: 'Approved',
                itemClass: 'VarioH',
                itemDescription: 'Vario 8500 PD Holographic Tablet (High Tech)',
                lifecyclePhase: 'Production'
            },
            {
                id: 5,
                item: 'AS47010',
                relatedItem: 'CM67550211',
                reciprocal: false,
                rank: '',
                planningEnabled: false,
                type: 'Upsell',
                description: 'Case and Keyboard upsell',
                startDate: '9/25/24 02:34 PM',
                endDate: '',
                approvalStatus: 'Approved',
                itemClass: 'VarioH',
                itemDescription: 'Vario 8500 PD Holographic Tablet (High Tech)',
                lifecyclePhase: 'Production'
            },
            {
                id: 6,
                item: 'AS47010',
                relatedItem: 'CM6755042',
                reciprocal: false,
                rank: '',
                planningEnabled: false,
                type: 'Promotional upgrade',
                description: 'Promotional Upgrade for 2016 Holographic Tablets',
                startDate: '9/25/24 02:34 PM',
                endDate: '',
                approvalStatus: 'Approved',
                itemClass: 'VarioH',
                itemDescription: 'Vario 8500 PD Holographic Tablet (High Tech)',
                lifecyclePhase: 'Production'
            }
        ]
    };

}
