<script>
import "./Price.css";
</script>

<template>
  <section id="pricing" class="gap no-top">
    <div class="container">
      <div class="heading sec-title-animation animation-style2">
        <span class="title-animation">Kalkulator Harga</span>
        <h2 class="title-animation">Perkirakan biaya fabrikasi PCB Anda</h2>
      </div>

      <div class="pricing">
        <div class="pricing-plans-text">
          <div>
            <!-- PCB Specifications -->
            <div class="p-6 bg-gray-50 border-b pricing-plans">
              <h2
                class="text-lg font-semibold text-gray-700 mb-3 flex items-center"
              >
                <i class="fas fa-info-circle mr-2"></i> Standard Specifications
              </h2>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                <div class="flex items-start">
                  <i class="fas fa-layer-group mt-1 mr-2"></i>
                  <span>Layers: 2</span>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-box-open mt-1 mr-2"></i>
                  <span>Material: FR4</span>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-ruler-vertical mt-1 mr-2"></i>
                  <span>Thickness: 1.6mm</span>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-bullse-eye mt-1 mr-2"></i>
                  <span>Min. drill: 0.2mm</span>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-ruler-horizontal mt-1 mr-2"></i>
                  <span>Min. trace: 0.127mm</span>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-ruler-combined mt-1 mr-2"></i>
                  <span>Min. spacing: 0.127mm</span>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-paint-brush text-[#328E6E] mt-1 mr-2"></i>
                  <span>Soldermask: Multi-color</span>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-font mt-1 mr-2"></i>
                  <span>Silkscreen: Yes</span>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-plug mt-1 mr-2"></i>
                  <span>PTH: Yes</span>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-fire mt-1 mr-2"></i>
                  <span>Finish: HASL</span>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-weight mt-1 mr-2"></i>
                  <span>Copper: 1oz</span>
                </div>
              </div>
            </div>

            <!-- Calculator Form -->
            <div class="p-6">
              <!-- Manual Input Section -->
              <div id="manualInputSection" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Dimensions Input -->
                  <div class="space-y-4">
                    <div class="flex justify-between items-center">
                      <h2
                        class="text-lg font-semibold text-gray-700 flex items-center"
                      >
                        <i
                          class="fas fa-ruler-combined mr-2 text-[#328E6E]"
                        ></i>
                        PCB Dimensions
                      </h2>
                      <div
                        class="text-xs text-gray-500 flex justify-between items-center"
                      >
                        <i class="fas fa-info-circle mr-1"></i>
                        <div>
                          Min: 5mm × 5mm <br />
                          Max: 400mm × 400mm
                        </div>
                      </div>
                    </div>

                    <div class="space-y-3">
                      <div>
                        <label
                          for="length"
                          class="block text-sm font-medium text-gray-700 mb-1"
                          >Length (mm)</label
                        >
                        <div class="number-input-container">
                          <input
                            type="number"
                            id="length"
                            class="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="e.g. 100"
                            min="5"
                            max="400"
                            step="1"
                            value="100"
                          />
                          <div class="number-input-controls">
                            <div
                              class="number-input-btn up"
                              onclick="incrementValue('length')"
                            >
                              <i class="fas fa-chevron-up text-xs"></i>
                            </div>
                            <div
                              class="number-input-btn down"
                              onclick="decrementValue('length')"
                            >
                              <i class="fas fa-chevron-down text-xs"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          for="width"
                          class="block text-sm font-medium text-gray-700 mb-1"
                          >Width (mm)</label
                        >
                        <div class="number-input-container">
                          <input
                            type="number"
                            id="width"
                            class="w-full p-3 border border-gray-300 rounded-lg input-highlight"
                            placeholder="e.g. 50"
                            min="5"
                            max="400"
                            step="1"
                            value="50"
                          />
                          <div class="number-input-controls">
                            <div
                              class="number-input-btn up"
                              onclick="incrementValue('width')"
                            >
                              <i class="fas fa-chevron-up text-xs"></i>
                            </div>
                            <div
                              class="number-input-btn down"
                              onclick="decrementValue('width')"
                            >
                              <i class="fas fa-chevron-down text-xs"></i>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label
                          for="quantity"
                          class="block text-sm font-medium text-gray-700 mb-1"
                          >Quantity</label
                        >
                        <div class="number-input-container">
                          <input
                            type="number"
                            id="quantity"
                            class="w-full p-3 border border-gray-300 rounded-lg input-highlight"
                            placeholder="e.g. 10"
                            min="1"
                            step="1"
                            value="1"
                          />
                          <div class="number-input-controls">
                            <div
                              class="number-input-btn up"
                              onclick="incrementValue('quantity')"
                            >
                              <i class="fas fa-chevron-up text-xs"></i>
                            </div>
                            <div
                              class="number-input-btn down"
                              onclick="incrementValue('quantity', -1)"
                            >
                              <i class="fas fa-chevron-down text-xs"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- PCB Example Image -->
                  <div class="flex flex-col items-center justify-center">
                    <div class="w-full max-w-xs p-4 bg-gray-50 rounded-lg">
                      <img
                        src="https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA="
                        alt="Example PCB"
                        class="pcb-example w-full h-auto"
                      />
                      <div class="mt-3 text-center text-sm text-gray-600">
                        <p>
                          <i class="fas fa-lightbulb mr-1 text-yellow-500"></i>
                          Example of a 2-layer PCB
                        </p>
                        <p class="mt-1">
                          <i
                            class="fas fa-r ruler-combined mr-1 text-blue-500"
                          ></i>
                          Dimensions shown in millimeters
                        </p>
                      </div>
                    </div>
                  </div>

                  <!-- Pricing Parameters (Hidden but values retained) -->
                  <div class="hidden">
                    <div>
                      <label
                        class="block text-sm font-medium text-gray-700 mb-1"
                        >Base Price (Rp/cm²)</label
                      >
                      <div class="bg-green-50 p-3 rounded-lg">
                        <span class="font-bold text-[#328E6E]">900</span>
                      </div>
                    </div>

                    <div>
                      <label
                        class="block text-sm font-medium text-gray-700 mb-1"
                        >Discount Threshold (cm²)</label
                      >
                      <div class="bg-green-50 p-3 rounded-lg">
                        <span class="font-bold text-[#328E6E]">1200</span>
                      </div>
                    </div>

                    <div>
                      <label
                        class="block text-sm font-medium text-gray-700 mb-1"
                        >Minimum Price (Rp/cm²)</label
                      >
                      <div class="bg-green-50 p-3 rounded-lg">
                        <span class="font-bold text-[#328E6E]">300</span>
                      </div>
                    </div>

                    <div>
                      <label
                        class="block text-sm font-medium text-gray-700 mb-1"
                        >Minimum Order Area (cm²)</label
                      >
                      <div class="bg-green-50 p-3 rounded-lg">
                        <span class="font-bold text-[#328E6E]">500</span>
                      </div>
                    </div>
                    <div>
                      <label
                        class="block text-sm font-medium text-gray-700 mb-1"
                        >Quantity Rounding</label
                      >
                      <div class="bg-green-50 p-3 rounded-lg">
                        <span class="font-bold text-[#328E6E]"
                          >Multiples of 5</span
                        >
                      </div>
                    </div>
                    <div>
                      <label
                        class="block text-sm font-medium text-gray-700 mb-1"
                        >Tokopedia Unit Price</label
                      >
                      <div class="bg-green-100 p-3 rounded-lg">
                        <span class="font-bold text-green-800">Rp 1,000</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Calculate Button -->
              <div class="mt-6 no-print">
                <button
                  id="calculateBtn"
                  class="w-full bg-[#328E6E] hover:bg-[#1a6e4e] text-white font-bold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center"
                >
                  <i class="fas fa-calculator mr-2"></i> Calculate PCB Price
                </button>
              </div>

              <!-- Results -->
              <div id="results" class="mt-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    class="result-card bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div class="flex items-center">
                      <div class="bg-green-100 p-3 rounded-full mr-3">
                        <i class="fas fa-ruler text-[#328E6E]"></i>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500">PCB Area</p>
                        <h3 id="areaResult" class="text-xl font-bold">0 cm²</h3>
                      </div>
                    </div>
                  </div>

                  <div
                    class="result-card bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div class="flex items-center">
                      <div class="bg-green-100 p-3 rounded-full mr-3">
                        <i class="fas fa-boxes text-[#328E6E]"></i>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500">Quantity</p>
                        <h3 id="quantityResult" class="text-xl font-bold">1</h3>
                      </div>
                    </div>
                  </div>

                  <div
                    class="result-card bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                  >
                    <div class="flex items-center">
                      <div class="bg-green-100 p-3 rounded-full mr-3">
                        <i class="fas fa-tag text-[#328E6E]"></i>
                      </div>
                      <div>
                        <p class="text-sm text-gray-500">Price per cm²</p>
                        <h3 id="pricePerCm2" class="text-xl font-bold">Rp 0</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Price Summary -->
                <div
                  class="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200"
                >
                  <h3 class="font-semibold text-lg mb-3 flex items-center">
                    <i class="fas fa-receipt mr-2 text-[#328E6E]"></i> Price
                    Summary
                  </h3>

                  <div class="space-y-2">
                    <div class="flex justify-between">
                      <span>Actual Area:</span>
                      <span id="actualArea">0 cm²</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Calculated Quantity:</span>
                      <span id="calculatedQuantity">0 pcs</span>
                    </div>
                    <div class="flex justify-between">
                      <span>Calculated Area:</span>
                      <span id="calculatedArea">0 cm²</span>
                    </div>

                    <!-- Large Size Surcharge (hidden by default) -->
                    <div id="surchargeContainer" class="hidden">
                      <div class="border-t border-gray-200 my-2"></div>
                      <div class="flex justify-between items-center">
                        <span>Large Size Surcharge:</span>
                        <div
                          class="surcharge-badge px-3 py-1 rounded-lg text-sm"
                        >
                          <span id="surchargeAmount">Rp 0</span>
                        </div>
                      </div>
                      <div class="text-xs text-gray-500 mt-1">
                        <i class="fas fa-info-circle mr-1"></i>
                        <span id="surchargeDescription"
                          >Additional cost for PCBs larger than 250mm ×
                          250mm</span
                        >
                      </div>
                    </div>

                    <div class="border-t border-gray-200 my-2"></div>
                    <div class="flex justify-between font-bold text-lg">
                      <span>Total Price:</span>
                      <span id="totalPrice" class="text-[#328E6E]">Rp 0</span>
                    </div>
                    <div class="flex justify-between text-sm text-gray-500">
                      <span>Price per PCB:</span>
                      <span id="pricePerPcb">Rp 0</span>
                    </div>
                  </div>
                </div>

                <!-- Tokopedia Order Info -->
                <div
                  class="mt-6 bg-green-50 p-4 rounded-lg border border-green-200"
                >
                  <h3 class="font-semibold text-lg mb-3 flex items-center">
                    <i class="fas fa-store mr-2 text-green-600"></i> Tokopedia
                    Order Information
                  </h3>
                  <div class="flex items-center justify-between">
                    <div>
                      <p class="text-sm text-gray-600">
                        Input Quantity on Tokopedia:
                      </p>
                      <h3
                        id="tokopediaQuantity"
                        class="text-2xl font-bold text-green-700"
                      >
                        0 pcs
                      </h3>
                      <p class="text-xs text-gray-500 mt-1">
                        (Rp 1,000 per unit)
                      </p>
                    </div>
                    <div class="tokopedia-badge p-3 rounded-lg text-white">
                      <a target="blank" href="https://www.tokopedia.com/"
                        ><i class="fas fa-shopping-cart text-2xl"></i
                      ></a>
                    </div>
                  </div>
                  <div class="mt-3 text-sm text-gray-600">
                    <p>
                      <i class="fas fa-info-circle mr-1 text-green-500"></i> The
                      actual PCB quantity you'll receive is
                      <span id="actualPcbQuantity" class="font-medium"
                        >0 pcs</span
                      >
                    </p>
                    <p class="mt-1">
                      <i class="fas fa-calculator mr-1 text-green-500"></i>
                      Total price matches:
                      <span id="tokopediaTotal" class="font-medium">Rp 0</span>
                    </p>
                  </div>
                </div>

                <!-- Printable Invoice -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
