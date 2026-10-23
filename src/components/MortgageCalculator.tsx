import React, { useState } from 'react';
import { Calculator, DollarSign, Percent, Calendar, HelpCircle, ArrowRight } from 'lucide-react';

interface MortgageCalculatorProps {
  onConsultationClick: () => void;
}

export const MortgageCalculator: React.FC<MortgageCalculatorProps> = ({ onConsultationClick }) => {
  const [homePrice, setHomePrice] = useState<number>(1350000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(6.5);
  const [loanTermYears, setLoanTermYears] = useState<number>(30);

  const downPaymentAmount = Math.round((homePrice * downPaymentPercent) / 100);
  const principal = homePrice - downPaymentAmount;
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTermYears * 12;

  const monthlyPrincipalInterest =
    monthlyRate > 0
      ? Math.round(
          (principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
            (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
        )
      : Math.round(principal / numberOfPayments);

  const estimatedTax = Math.round((homePrice * 0.0068) / 12);
  const estimatedInsurance = Math.round((homePrice * 0.0035) / 12);
  const totalMonthly = monthlyPrincipalInterest + estimatedTax + estimatedInsurance;

  return (
    <section className="py-20 lg:py-24 bg-[#F7F5F0] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Explanation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#082B62]">
              <Calculator className="w-4 h-4" />
              <span>Investment Planning</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#061A3A] tracking-tight">
              Estimate Your Monthly Investment.
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              Calculate projected monthly mortgage payments based on purchase price, down payment, and prevailing interest rates. For specialized financing programs or jumbo loan advisory, Kelvin connects you with trusted Arizona lending partners.
            </p>

            <div className="pt-2">
              <button
                onClick={onConsultationClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#082B62] hover:bg-[#061A3A] text-white text-xs font-semibold rounded-sm transition-colors cursor-pointer shadow-2xs"
              >
                <span>Discuss Financing & Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Calculator Box */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-sm border border-slate-200/90 shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-6 border-b border-slate-100">
              {/* Home Price Input */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="home-price" className="text-xs font-bold text-slate-700 uppercase">Home Price</label>
                  <span className="text-xs font-bold text-[#082B62] tabular-nums">${homePrice.toLocaleString()}</span>
                </div>
                <input
                  id="home-price"
                  type="range"
                  min={300000}
                  max={4000000}
                  step={25000}
                  value={homePrice}
                  onChange={(e) => setHomePrice(Number(e.target.value))}
                  className="w-full accent-[#082B62] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>$300K</span>
                  <span>$4M</span>
                </div>
              </div>

              {/* Down Payment Input */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="down-payment" className="text-xs font-bold text-slate-700 uppercase">Down Payment</label>
                  <span className="text-xs font-bold text-[#082B62] tabular-nums">
                    {downPaymentPercent}% (${downPaymentAmount.toLocaleString()})
                  </span>
                </div>
                <input
                  id="down-payment"
                  type="range"
                  min={5}
                  max={50}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#082B62] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>5%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label htmlFor="interest-rate" className="text-xs font-bold text-slate-700 uppercase">Interest Rate (APR)</label>
                  <span className="text-xs font-bold text-[#082B62] tabular-nums">{interestRate.toFixed(1)}%</span>
                </div>
                <input
                  id="interest-rate"
                  type="range"
                  min={4.0}
                  max={9.0}
                  step={0.1}
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full accent-[#082B62] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>4.0%</span>
                  <span>9.0%</span>
                </div>
              </div>

              {/* Loan Term */}
              <div>
                <span className="block text-xs font-bold text-slate-700 uppercase mb-1">Loan Term</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setLoanTermYears(30)}
                    className={`py-2 text-xs font-semibold rounded-sm border transition-colors cursor-pointer ${
                      loanTermYears === 30
                        ? 'bg-[#082B62] text-white border-[#082B62]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    30 Years Fixed
                  </button>
                  <button
                    type="button"
                    onClick={() => setLoanTermYears(15)}
                    className={`py-2 text-xs font-semibold rounded-sm border transition-colors cursor-pointer ${
                      loanTermYears === 15
                        ? 'bg-[#082B62] text-white border-[#082B62]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    15 Years Fixed
                  </button>
                </div>
              </div>
            </div>

            {/* Output Payment Breakdown */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
              <div className="sm:col-span-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Estimated Total Monthly
                </span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#082B62] tabular-nums">
                  ${totalMonthly.toLocaleString()}
                  <span className="text-sm font-normal text-slate-500">/mo</span>
                </span>
              </div>

              <div className="space-y-1 sm:col-span-2 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span className="text-slate-500">Principal & Interest:</span>
                  <span className="font-semibold text-slate-900 tabular-nums">${monthlyPrincipalInterest.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Property Taxes (Est.):</span>
                  <span className="font-semibold text-slate-900 tabular-nums">${estimatedTax.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Homeowners Ins. (Est.):</span>
                  <span className="font-semibold text-slate-900 tabular-nums">${estimatedInsurance.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
