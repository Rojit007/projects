import React, { useState } from 'react';
import { Zap, Droplets, Power, AlertTriangle, CheckCircle, IndianRupee } from 'lucide-react';

export default function SimpleWaterController() {
  const [activeTab, setActiveTab] = useState('circuit');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-6 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Droplets className="w-8 h-8" />
              <h1 className="text-3xl font-bold">No-Microcontroller Water Level Controller</h1>
            </div>
            <p className="text-green-100">Simple Relay Circuit • Manual Start • Auto Cutoff • Ultra Cheap!</p>
          </div>

          {/* Tabs */}
          <div className="flex border-b bg-gray-50 overflow-x-auto">
            {['circuit', 'components', 'scr-circuit', 'assembly'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-medium whitespace-nowrap capitalize transition-colors ${
                  activeTab === tab
                    ? 'bg-white text-green-600 border-b-2 border-green-600'
                    : 'text-gray-600 hover:text-green-600'
                }`}
              >
                {tab === 'scr-circuit' ? 'SCR Circuit' : tab}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'circuit' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Simple Relay Latch Circuit (Recommended)</h2>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-2 border-green-200 mb-4">
                  <h3 className="font-bold text-green-900 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Why This Circuit is Better
                  </h3>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• <strong>No Arduino needed</strong> - Just 3 basic components!</li>
                    <li>• <strong>Super cheap</strong> - Total cost under ₹150</li>
                    <li>• <strong>Easy to understand</strong> - Simple relay logic</li>
                    <li>• <strong>No programming</strong> - Plug and play</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                  <svg viewBox="0 0 900 700" className="w-full h-auto">
                    {/* AC Power Input */}
                    <rect x="50" y="100" width="100" height="60" fill="#ef4444" stroke="#991b1b" strokeWidth="2" rx="5"/>
                    <text x="100" y="120" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">230V AC</text>
                    <text x="100" y="140" textAnchor="middle" fill="white" fontSize="10">Input</text>
                    
                    {/* START Button */}
                    <circle cx="250" cy="130" r="30" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="2"/>
                    <text x="250" y="135" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">START</text>
                    <text x="250" y="180" textAnchor="middle" fill="#374151" fontSize="10">Push Button (NO)</text>
                    
                    {/* Main Relay */}
                    <rect x="400" y="80" width="140" height="100" fill="#10b981" stroke="#047857" strokeWidth="2" rx="5"/>
                    <text x="470" y="105" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">RELAY</text>
                    <text x="470" y="125" textAnchor="middle" fill="white" fontSize="11">230V AC Coil</text>
                    <text x="470" y="145" textAnchor="middle" fill="white" fontSize="10">15A Contacts</text>
                    <text x="410" y="165" fill="white" fontSize="9">COM</text>
                    <text x="440" y="165" fill="white" fontSize="9">NO</text>
                    <text x="520" y="105" fill="white" fontSize="9">Coil</text>
                    
                    {/* Indicator LED with Resistor */}
                    <rect x="620" y="110" width="60" height="30" fill="#374151" stroke="#1f2937" strokeWidth="1" rx="3"/>
                    <text x="650" y="130" textAnchor="middle" fill="white" fontSize="9">47kΩ</text>
                    <circle cx="720" cy="125" r="12" fill="#eab308" stroke="#a16207" strokeWidth="2"/>
                    <text x="720" y="155" textAnchor="middle" fill="#374151" fontSize="10">LED</text>
                    
                    {/* Sensor Probe Circuit */}
                    <circle cx="470" cy="280" r="30" fill="#06b6d4" stroke="#0891b2" strokeWidth="2"/>
                    <text x="470" y="285" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">SENSOR</text>
                    <text x="470" y="320" textAnchor="middle" fill="#374151" fontSize="10">Water Detection</text>
                    
                    {/* Motor/Pump */}
                    <circle cx="750" cy="280" r="45" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
                    <text x="750" y="275" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold">MOTOR</text>
                    <text x="750" y="295" textAnchor="middle" fill="white" fontSize="10">Pump</text>
                    
                    {/* Water Tank */}
                    <rect x="250" y="450" width="120" height="150" fill="none" stroke="#06b6d4" strokeWidth="3" rx="5"/>
                    <rect x="255" y="550" width="110" height="45" fill="#93c5fd" fillOpacity="0.3"/>
                    <text x="310" y="620" textAnchor="middle" fill="#06b6d4" fontSize="12" fontWeight="bold">TANK</text>
                    
                    {/* Sensor Probes in Tank */}
                    <line x1="290" y1="470" x2="290" y2="580" stroke="#ef4444" strokeWidth="3"/>
                    <circle cx="290" cy="470" r="5" fill="#ef4444"/>
                    <text x="305" y="475" fill="#ef4444" fontSize="10" fontWeight="bold">Full Level</text>
                    
                    <line x1="330" y1="585" x2="330" y2="595" stroke="#374151" strokeWidth="3"/>
                    <text x="270" y="600" fill="#374151" fontSize="10" fontWeight="bold">Common/GND</text>
                    
                    {/* Connections */}
                    {/* AC to START button */}
                    <line x1="150" y1="130" x2="220" y2="130" stroke="#ef4444" strokeWidth="2"/>
                    <text x="185" y="120" fill="#ef4444" fontSize="10">L (Live)</text>
                    
                    {/* START to Relay Coil */}
                    <line x1="280" y1="130" x2="380" y2="130" stroke="#8b5cf6" strokeWidth="2"/>
                    <line x1="380" y1="130" x2="380" y2="95" stroke="#8b5cf6" strokeWidth="2"/>
                    <line x1="380" y1="95" x2="520" y2="95" stroke="#8b5cf6" strokeWidth="2"/>
                    
                    {/* Self-latching connection */}
                    <line x1="450" y1="180" x2="450" y2="200" stroke="#10b981" strokeWidth="2"/>
                    <line x1="450" y1="200" x2="380" y2="200" stroke="#10b981" strokeWidth="2"/>
                    <line x1="380" y1="200" x2="380" y2="130" stroke="#10b981" strokeWidth="2" strokeDasharray="4"/>
                    <text x="400" y="190" fill="#10b981" fontSize="9">Self-latch</text>
                    
                    {/* Relay Coil to Sensor */}
                    <line x1="520" y1="115" x2="560" y2="115" stroke="#06b6d4" strokeWidth="2"/>
                    <line x1="560" y1="115" x2="560" y2="280" stroke="#06b6d4" strokeWidth="2"/>
                    <line x1="560" y1="280" x2="500" y2="280" stroke="#06b6d4" strokeWidth="2"/>
                    
                    {/* Sensor to Neutral */}
                    <line x1="440" y1="280" x2="100" y2="280" stroke="#0891b2" strokeWidth="2"/>
                    <line x1="100" y1="280" x2="100" y2="160" stroke="#0891b2" strokeWidth="2"/>
                    <text x="110" y="270" fill="#0891b2" fontSize="10">N (Neutral)</text>
                    
                    {/* LED Circuit */}
                    <line x1="520" y1="95" x2="580" y2="95" stroke="#eab308" strokeWidth="2"/>
                    <line x1="580" y1="95" x2="580" y2="125" stroke="#eab308" strokeWidth="2"/>
                    <line x1="580" y1="125" x2="620" y2="125" stroke="#eab308" strokeWidth="2"/>
                    <line x1="680" y1="125" x2="708" y2="125" stroke="#eab308" strokeWidth="2"/>
                    <line x1="732" y1="125" x2="760" y2="125" stroke="#eab308" strokeWidth="2"/>
                    <line x1="760" y1="125" x2="760" y2="280" stroke="#eab308" strokeWidth="2"/>
                    <line x1="760" y1="280" x2="100" y2="280" stroke="#eab308" strokeWidth="2" strokeDasharray="3"/>
                    
                    {/* Relay COM-NO to Motor */}
                    <line x1="540" y1="165" x2="540" y2="240" stroke="#f59e0b" strokeWidth="3"/>
                    <line x1="540" y1="240" x2="705" y2="240" stroke="#f59e0b" strokeWidth="3"/>
                    <line x1="705" y1="240" x2="705" y2="280" stroke="#f59e0b" strokeWidth="3"/>
                    
                    {/* Motor to Neutral */}
                    <line x1="795" y1="280" x2="820" y2="280" stroke="#0891b2" strokeWidth="3"/>
                    <line x1="820" y1="280" x2="820" y2="350" stroke="#0891b2" strokeWidth="3"/>
                    <line x1="820" y1="350" x2="100" y2="350" stroke="#0891b2" strokeWidth="3"/>
                    <line x1="100" y1="350" x2="100" y2="280" stroke="#0891b2" strokeWidth="3" strokeDasharray="3"/>
                    
                    {/* Relay COM to Live */}
                    <line x1="410" y1="165" x2="410" y2="220" stroke="#ef4444" strokeWidth="3"/>
                    <line x1="410" y1="220" x2="150" y2="220" stroke="#ef4444" strokeWidth="3"/>
                    <line x1="150" y1="220" x2="150" y2="130" stroke="#ef4444" strokeWidth="3" strokeDasharray="3"/>
                    
                    {/* Sensor wires to tank */}
                    <line x1="470" y1="310" x2="470" y2="400" stroke="#06b6d4" strokeWidth="2"/>
                    <line x1="470" y1="400" x2="290" y2="400" stroke="#06b6d4" strokeWidth="2"/>
                    <line x1="290" y1="400" x2="290" y2="470" stroke="#06b6d4" strokeWidth="2"/>
                    <text x="380" y="395" fill="#06b6d4" fontSize="9">To Full Probe</text>
                    
                    <line x1="100" y1="280" x2="100" y2="420" stroke="#374151" strokeWidth="2" strokeDasharray="3"/>
                    <line x1="100" y1="420" x2="330" y2="420" stroke="#374151" strokeWidth="2"/>
                    <line x1="330" y1="420" x2="330" y2="585" stroke="#374151" strokeWidth="2"/>
                    <text x="210" y="415" fill="#374151" fontSize="9">To Common Probe</text>
                  </svg>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">How This Circuit Works</h3>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
                    <li><strong>Press START:</strong> Current flows through START button → Relay coil energizes → Relay contacts close</li>
                    <li><strong>Self-Latching:</strong> Once relay closes, it powers itself through its own NO contact (even after releasing START button)</li>
                    <li><strong>Motor Runs:</strong> Relay NO contacts supply power to motor pump</li>
                    <li><strong>Water Rises:</strong> When water touches both probes in tank</li>
                    <li><strong>Auto Stop:</strong> Water conducts electricity → Creates short circuit across relay coil terminals → Relay de-energizes → Motor stops</li>
                    <li><strong>Manual Reset:</strong> Need to press START again after tank empties</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-yellow-800">Critical Safety</p>
                      <p className="text-sm text-yellow-700">This circuit uses 230V AC directly. The sensor probes are at mains voltage when pump is running. Use ONLY with proper electrical safety knowledge and get an electrician for installation.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'components' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Ultra-Cheap Component List</h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-bold text-green-900 mb-3">Main Components</h3>
                    <ul className="space-y-3 text-sm text-green-800">
                      <li className="flex justify-between items-start gap-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span><strong>230V AC Relay</strong> (15A, SPDT with NO contact)</span>
                        </div>
                        <span className="font-bold whitespace-nowrap">₹50-80</span>
                      </li>
                      <li className="flex justify-between items-start gap-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span><strong>Push Button</strong> (NO type, 6A rated)</span>
                        </div>
                        <span className="font-bold whitespace-nowrap">₹15-25</span>
                      </li>
                      <li className="flex justify-between items-start gap-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span><strong>LED Indicator</strong> (230V ready-made with resistor)</span>
                        </div>
                        <span className="font-bold whitespace-nowrap">₹10-15</span>
                      </li>
                      <li className="flex justify-between items-start gap-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span><strong>Stainless Steel Wire</strong> (2 pieces for probes)</span>
                        </div>
                        <span className="font-bold whitespace-nowrap">₹20-30</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-cyan-50 p-4 rounded-lg border border-cyan-200">
                    <h3 className="font-bold text-cyan-900 mb-3">Installation Materials</h3>
                    <ul className="space-y-3 text-sm text-cyan-800">
                      <li className="flex justify-between items-start gap-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span><strong>Plastic Junction Box</strong> (for circuit)</span>
                        </div>
                        <span className="font-bold whitespace-nowrap">₹30-50</span>
                      </li>
                      <li className="flex justify-between items-start gap-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span><strong>2-core Wire</strong> (for sensor, 5-10m)</span>
                        </div>
                        <span className="font-bold whitespace-nowrap">₹30-50</span>
                      </li>
                      <li className="flex justify-between items-start gap-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span><strong>3-pin Plug & Socket</strong> (optional, for modularity)</span>
                        </div>
                        <span className="font-bold whitespace-nowrap">₹40-60</span>
                      </li>
                      <li className="flex justify-between items-start gap-2">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span><strong>Wire connectors</strong> & insulation tape</span>
                        </div>
                        <span className="font-bold whitespace-nowrap">₹20-30</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-lg">
                  <h3 className="font-bold mb-3 flex items-center gap-2 text-xl">
                    <IndianRupee className="w-6 h-6" />
                    <span>Total Cost</span>
                  </h3>
                  <div className="flex items-baseline gap-3">
                    <p className="text-5xl font-bold">₹145-240</p>
                    <p className="text-green-100">only!</p>
                  </div>
                  <p className="text-sm text-green-100 mt-3">That's 3-4x cheaper than commercial products and no programming needed!</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="font-bold text-purple-900 mb-2">Where to Buy</h3>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• <strong>Local:</strong> Any electrical shop or hardware store</li>
                    <li>• <strong>Online:</strong> Amazon, Flipkart, RoboElements, ElectronicsDIY</li>
                    <li>• <strong>Ask for:</strong> "230V AC relay 15A coil", "panel mount push button", "stainless steel electrodes"</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'scr-circuit' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Alternative: SCR-Based Circuit (Advanced)</h2>
                
                <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-4">
                  <h3 className="font-semibold text-orange-900 mb-2">When to Use SCR Circuit</h3>
                  <p className="text-sm text-orange-800">This is more advanced but uses even fewer moving parts. Good if you want solid-state switching instead of mechanical relay.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200">
                  <svg viewBox="0 0 800 600" className="w-full h-auto">
                    {/* AC Input */}
                    <rect x="50" y="100" width="80" height="50" fill="#ef4444" stroke="#991b1b" strokeWidth="2" rx="5"/>
                    <text x="90" y="130" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">230V AC</text>
                    
                    {/* Bridge Rectifier */}
                    <circle cx="220" cy="125" r="35" fill="#374151" stroke="#1f2937" strokeWidth="2"/>
                    <text x="220" y="130" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Bridge</text>
                    <text x="220" y="175" textAnchor="middle" fill="#374151" fontSize="9">Rectifier</text>
                    
                    {/* SCR */}
                    <path d="M 380 100 L 380 150 L 440 125 Z" fill="#8b5cf6" stroke="#6d28d9" strokeWidth="2"/>
                    <line x1="410" y1="140" x2="410" y2="160" stroke="#6d28d9" strokeWidth="2"/>
                    <text x="410" y="180" textAnchor="middle" fill="#374151" fontSize="10" fontWeight="bold">SCR</text>
                    <text x="410" y="195" textAnchor="middle" fill="#374151" fontSize="9">(BT151 or similar)</text>
                    
                    {/* START Button */}
                    <circle cx="350" cy="280" r="25" fill="#10b981" stroke="#047857" strokeWidth="2"/>
                    <text x="350" y="285" textAnchor="middle" fill="white" fontSize="10">START</text>
                    
                    {/* Resistor for Gate */}
                    <rect x="380" y="265" width="50" height="20" fill="#d97706" stroke="#92400e" strokeWidth="1" rx="3"/>
                    <text x="405" y="280" textAnchor="middle" fill="white" fontSize="9">1kΩ</text>
                    
                    {/* Sensor */}
                    <circle cx="520" cy="280" r="25" fill="#06b6d4" stroke="#0891b2" strokeWidth="2"/>
                    <text x="520" y="285" textAnchor="middle" fill="white" fontSize="10">Sensor</text>
                    
                    {/* Load (Motor) */}
                    <circle cx="600" cy="125" r="40" fill="#f59e0b" stroke="#d97706" strokeWidth="2"/>
                    <text x="600" y="130" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">MOTOR</text>
                    
                    {/* Connections */}
                    <line x1="130" y1="125" x2="185" y2="125" stroke="#ef4444" strokeWidth="2"/>
                    <line x1="255" y1="125" x2="380" y2="125" stroke="#8b5cf6" strokeWidth="2"/>
                    <line x1="440" y1="125" x2="560" y2="125" stroke="#f59e0b" strokeWidth="2"/>
                    <line x1="640" y1="125" x2="700" y2="125" stroke="#0891b2" strokeWidth="2"/>
                    <line x1="700" y1="125" x2="700" y2="200" stroke="#0891b2" strokeWidth="2"/>
                    <line x1="700" y1="200" x2="90" y2="200" stroke="#0891b2" strokeWidth="2"/>
                    <line x1="90" y1="200" x2="90" y2="150" stroke="#0891b2" strokeWidth="2"/>
                    
                    {/* Gate circuit */}
                    <line x1="410" y1="160" x2="410" y2="240" stroke="#10b981" strokeWidth="2"/>
                    <line x1="410" y1="240" x2="375" y2="240" stroke="#10b981" strokeWidth="2"/>
                    <line x1="375" y1="240" x2="375" y2="280" stroke="#10b981" strokeWidth="2"/>
                    <line x1="375" y1="280" x2="325" y2="280" stroke="#10b981" strokeWidth="2"/>
                    
                    <line x1="430" y1="275" x2="495" y2="275" stroke="#06b6d4" strokeWidth="2"/>
                    <line x1="545" y1="280" x2="700" y2="280" stroke="#374151" strokeWidth="2"/>
                    <line x1="700" y1="280" x2="700" y2="200" stroke="#374151" strokeWidth="2" strokeDasharray="3"/>
                    
                    {/* Labels */}
                    <text x="160" y="115" fill="#ef4444" fontSize="10">Live</text>
                    <text x="90" y="185" fill="#0891b2" fontSize="10">Neutral</text>
                  </svg>
                </div>

                <div className="space-y-4">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Components Needed</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>SCR (Silicon Controlled Rectifier)</strong> - BT151, BT136, or 2N6073 (₹15-30)</li>
                      <li>• <strong>Bridge Rectifier</strong> - 2A, 400V (₹10-15)</li>
                      <li>• <strong>1kΩ Resistor</strong> (1W rated) - (₹3-5)</li>
                      <li>• <strong>Push Button</strong> - Momentary NO type (₹15-20)</li>
                      <li>• <strong>Sensor Probes</strong> - Stainless steel wire (₹20-30)</li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-3">Total: ₹63-100 only!</p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2">How SCR Circuit Works</h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-blue-800">
                      <li>Bridge rectifier converts AC to pulsating DC</li>
                      <li>Press START button → Small current flows to SCR gate → SCR turns ON</li>
                      <li>Once ON, SCR stays latched (conducts current) even after releasing button</li>
                      <li>Motor runs through SCR</li>
                      <li>When water touches sensor probes → Short circuit on gate → SCR turns OFF</li>
                      <li>SCR remains OFF until START is pressed again</li>
                    </ol>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5" />
                      <div>
                        <p className="font-semibold text-red-800">SCR Circuit Limitations</p>
                        <ul className="text-sm text-red-700 space-y-1 mt-2">
                          <li>• Works only with resistive loads (universal motors okay, induction motors may have issues)</li>
                          <li>• SCR gets hot - needs heatsink for motors above 0.5HP</li>
                          <li>• More complex troubleshooting than relay</li>
                          <li>• Still uses mains voltage on sensor probes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Advantages of SCR</h3>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>✓ No moving parts (more reliable long-term)</li>
                      <li>✓ Silent operation (no relay clicking)</li>
                      <li>✓ Cheaper (under ₹100 total)</li>
                      <li>✓ Compact size</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'assembly' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Step-by-Step Assembly</h2>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-4 rounded-lg border-2 border-orange-200 mb-6">
                  <h3 className="font-bold text-orange-900 mb-2 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6" />
                    CRITICAL SAFETY WARNING
                  </h3>
                  <p className="text-sm text-orange-800 mb-2">This circuit works with 230V AC mains voltage. This is DANGEROUS and can be FATAL.</p>
                  <ul className="text-sm text-orange-800 space-y-1">
                    <li>• Only attempt if you understand electrical safety</li>
                    <li>• Always disconnect power before working</li>
                    <li>• Use proper insulation on all connections</li>
                    <li>• Consider hiring a licensed electrician</li>
                    <li>• Test with a multimeter before powering on</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">1</span>
                      Prepare the Enclosure
                    </h3>
                    <ul className="ml-8 space-y-1 text-sm text-gray-700">
                      <li>• Get a plastic junction box (100x100mm or larger)</li>
                      <li>• Drill hole for START push button on front</li>
                      <li>• Drill small hole for LED indicator</li>
                      <li>• Drill cable entry holes on sides with cable glands</li>
                      <li>• Clean all plastic burrs</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
                      Mount Components
                    </h3>
                    <ul className="ml-8 space-y-1 text-sm text-gray-700">
                      <li>• Mount relay on DIN rail or use screws (apply hot glue for stability)</li>
                      <li>• Install push button in drilled hole</li>
                      <li>• Mount LED in its hole with holder/hot glue</li>
                      <li>• Keep all components away from edges</li>
                      <li>• Leave space for wire routing</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">3</span>
                      Wire the Circuit (POWER OFF!)
                    </h3>
                    <ul className="ml-8 space-y-2 text-sm text-gray-700">
                      <li><strong>Input Power:</strong>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>- Bring in 230V AC through cable gland</li>
                          <li>- Use proper wire gauge (1.5mm² minimum)</li>
                          <li>- Connect Live to one terminal of START button</li>
                          <li>- Connect Neutral to one side of relay coil</li>
                        </ul>
                      </li>
                      <li><strong>Self-Latching:</strong>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>- Connect START button output to relay coil</li>
                          <li>- Connect relay NO contact in parallel with START button</li>
                          <li>- This creates the "hold" circuit</li>
                        </ul>
                      </li>
                      <li><strong>Sensor Connection:</strong>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>- Connect sensor wire between relay coil terminals</li>
                          <li>- This shorts the coil when water completes circuit</li>
                          <li>- Use 2-core wire rated for outdoor use</li>
                        </ul>
                      </li>
                      <li><strong>Output to Motor:</strong>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>- Connect Live through relay COM to NO contact</li>
                          <li>- Connect relay NO output to motor socket</li>
                          <li>- Connect Neutral directly to motor socket</li>
                        </ul>
                      </li>
                      <li><strong>LED Indicator:</strong>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>- Connect 230V LED across relay coil</li>
                          <li>- LED lights when pump is running</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">4</span>
                      Prepare Sensor Probes
                    </h3>
                    <ul className="ml-8 space-y-1 text-sm text-gray-700">
                      <li>• Use 2 pieces of stainless steel wire (6-8 inch length)</li>
                      <li>• Solder connection wires to probes</li>
                      <li>• Apply epoxy or silicone sealant on solder joints</li>
                      <li>• Cover exposed wire with heat shrink tube</li>
                      <li>• Leave only probe tips exposed (1-2 inches)</li>
                      <li>• Label wires: "Full Level" and "Common"</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">5</span>
                      Install in Tank
                    </h3>
                    <ul className="ml-8 space-y-1 text-sm text-gray-700">
                      <li>• Mount "Full Level" probe at desired cutoff height</li>
                      <li>• Use plastic clamps or cable ties on tank wall</li>
                      <li>• Mount "Common" probe at tank bottom (always in water)</li>
                      <li>• Keep probes 2-3 inches apart minimum</li>
                      <li>• Ensure probes don't touch tank walls or each other</li>
                      <li>• Seal cable entry point in tank if needed</li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">6</span>
                      Testing Procedure
                    </h3>
                    <ul className="ml-8 space-y-2 text-sm text-gray-700">
                      <li><strong>Visual Inspection:</strong>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>- Check all connections are tight</li>
                          <li>- Verify no bare wires touching</li>
                          <li>- Ensure proper insulation on all joints</li>
                        </ul>
                      </li>
                      <li><strong>Continuity Test (Power OFF):</strong>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>- Use multimeter to check wiring</li>
                          <li>- Verify relay coil resistance (typically 100-500Ω)</li>
                        </ul>
                      </li>
                      <li><strong>Bench Test (No Motor):</strong>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>- Close enclosure, connect power</li>
                          <li>- Press START - relay should click, LED lights</li>
                          <li>- Touch sensor wires together - relay should release</li>
                          <li>- Test multiple times to confirm reliability</li>
                        </ul>
                      </li>
                      <li><strong>Live Test with Water:</strong>
                        <ul className="ml-4 mt-1 space-y-1">
                          <li>- Connect motor pump</li>
                          <li>- Start pump with button</li>
                          <li>- Watch as water level rises</li>
                          <li>- Verify auto-cutoff when water touches probe</li>
                          <li>- Test restart after water level drops</li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white border-2 border-gray-200 rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">7</span>
                      Final Installation
                    </h3>
                    <ul className="ml-8 space-y-1 text-sm text-gray-700">
                      <li>• Mount control box near motor or in accessible location</li>
                      <li>• Use waterproof box if outdoors</li>
                      <li>• Label START button clearly</li>
                      <li>• Add warning label about mains voltage</li>
                      <li>• Install proper circuit breaker/MCB for protection</li>
                      <li>• Document probe positions for future reference</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-2">Troubleshooting Tips</h3>
                  <div className="space-y-2 text-sm text-blue-800">
                    <div>
                      <strong>Relay doesn't latch:</strong>
                      <p className="ml-4">- Check self-latching wire connection</p>
                      <p className="ml-4">- Verify relay NO contact is working</p>
                    </div>
                    <div>
                      <strong>Doesn't stop when tank full:</strong>
                      <p className="ml-4">- Test sensor probes with multimeter (should show continuity in water)</p>
                      <p className="ml-4">- Check if probes are corroded - clean with sandpaper</p>
                      <p className="ml-4">- Verify sensor wire connections</p>
                    </div>
                    <div>
                      <strong>Stops immediately after starting:</strong>
                      <p className="ml-4">- Check if sensor wires are shorted</p>
                      <p className="ml-4">- Verify probes aren't touching in tank</p>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h3 className="font-semibold text-purple-900 mb-2">Maintenance</h3>
                  <ul className="text-sm text-purple-800 space-y-1">
                    <li>• Clean sensor probes every 2-3 months (remove mineral deposits)</li>
                    <li>• Check relay contacts yearly</li>
                    <li>• Tighten all screw terminals if loose</li>
                    <li>• Replace relay if it becomes noisy or unreliable</li>
                    <li>• Keep enclosure dry and dust-free</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Comparison Footer */}
        <div className="mt-6 bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4 text-xl">Quick Comparison</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-lg border-2 border-blue-200">
              <h4 className="font-bold text-blue-900 mb-2">Arduino Method</h4>
              <p className="text-sm text-blue-800 mb-2">Cost: ₹470-770</p>
              <p className="text-xs text-blue-700">+ Safe low voltage sensor</p>
              <p className="text-xs text-blue-700">+ Easy to customize</p>
              <p className="text-xs text-red-700">- Needs programming</p>
              <p className="text-xs text-red-700">- More components</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-4 rounded-lg border-2 border-green-300 shadow-lg">
              <h4 className="font-bold text-green-900 mb-2">⭐ Relay Circuit (Best!)</h4>
              <p className="text-sm text-green-800 mb-2">Cost: ₹145-240</p>
              <p className="text-xs text-green-700">+ Cheapest option</p>
              <p className="text-xs text-green-700">+ No programming</p>
              <p className="text-xs text-green-700">+ Simple to build</p>
              <p className="text-xs text-red-700">- Mains voltage sensor</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-4 rounded-lg border-2 border-purple-200">
              <h4 className="font-bold text-purple-900 mb-2">SCR Circuit</h4>
              <p className="text-sm text-purple-800 mb-2">Cost: ₹63-100</p>
              <p className="text-xs text-purple-700">+ Ultra cheap</p>
              <p className="text-xs text-purple-700">+ No moving parts</p>
              <p className="text-xs text-red-700">- More technical</p>
              <p className="text-xs text-red-700">- Motor compatibility</p>
            </div>
          </div>
        </div>

        {/* Final Tips */}
        <div className="mt-6 text-center text-gray-600 text-sm space-y-2">
          <p>💡 <strong>Recommended:</strong> Start with the simple relay circuit if you're new to electronics</p>
          <p>⚡ <strong>Safety First:</strong> When in doubt, hire a licensed electrician for mains wiring</p>
        </div>
      </div>
    </div>
  );
}