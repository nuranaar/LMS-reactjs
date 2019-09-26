import React from 'react'
import PercentageChart from '../../component/Statistics/StatisticCards/PercentageChart';
import InfoCard from '../../component/Statistics/StatisticCards/InfoCard';

export default function StudentStatistics() {
    return (
        <div className="statistics-list row">
            <div className="col-6">
                <PercentageChart totalTitle='Ümumi dərs saatı' totalValue={300} doneTitle='Keçirilən dərs saatı' doneValue={210} chart='Keçirilən dərs saatı' />
                <InfoCard title='Davamiyyət' value='80%' />
            </div>
            <div className="col-6">
                <PercentageChart totalTitle='Verilən tapşırıq sayı' totalValue={34} doneTitle='Edilən tapşırıq sayı' doneValue={27} chart='Toplam tapşırıq balı' />
                <InfoCard title='Keçirilən layihə sayı' value='1/3' />
            </div>
        </div>
    )
}
