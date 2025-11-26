export default function RequirementsSection() {
  return (
    <div className="space-y-12">
      {/* Driver Requirements */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-6">Driver Requirements</h2>
        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li className="flex gap-3">
            <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
            <span>Valid FAD (Employment Authorization Document)</span>
          </li>
          <ul className="ml-8 space-y-3">
            <li className="flex gap-3">
              <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
              <span>At least 2+ years of driving experience</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
              <span>Valid U.S. Driver's License</span>
            </li>
          </ul>
          <li className="flex gap-3">
            <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
            <span>Clean driving record (no major violations)</span>
          </li>
          <ul className="ml-8 space-y-3">
            <li className="flex gap-3">
              <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
              <span>Ability to drive OTR / Regional</span>
            </li>
          </ul>
          <li className="flex gap-3">
            <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
            <span>Basic English for communication with dispatch</span>
          </li>
          <ul className="ml-8 space-y-3">
            <li className="flex gap-3">
              <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
              <span>Responsible, punctual, professional attitude</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
              <span>Ability to provide updates on time</span>
            </li>
          </ul>
          <li className="flex gap-3">
            <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
            <span>Must follow all safety procedures and company policies</span>
          </li>
        </ul>
      </div>

      {/* What We Provide */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-6">What We Provide</h2>
        <ul className="space-y-3 text-gray-700 text-sm leading-relaxed">
          <li className="flex gap-3">
            <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
            <span>Well-maintained trucks (fuel, maintenance, insurance covered)</span>
          </li>
          <ul className="ml-8 space-y-3">
            <li className="flex gap-3">
              <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
              <span>24/7 dispatch & tracking support</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
              <span>Consistent weekly miles</span>
            </li>
          </ul>
          <li className="flex gap-3">
            <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
            <span>Quick problem-solving & full back-office support</span>
          </li>
          <ul className="ml-8 space-y-3">
            <li className="flex gap-3">
              <span className="text-gray-600 flex-shrink-0 font-bold">●</span>
              <span>Transparent pay and on-time payments</span>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  )
}
