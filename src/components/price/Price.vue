<template>
  <div
    id="notification"
    class="notification"
    :class="[
      notificationType,
      { show: isNotificationVisible, hidden: !isNotificationVisible },
    ]"
  >
    <div class="notification-icon">
      <i class="fas fa-exclamation-circle"></i>
    </div>
    <div class="notification-content">{{ notificationMessage }}</div>
    <div class="notification-close" @click="hideNotification">
      <i class="fas fa-times"></i>
    </div>
  </div>

  <section id="pricing" class="gap no-top">
    <div class="container">
      <div class="heading sec-title-animation animation-style2">
        <span class="title-animation">Kalkulator Harga</span>
        <h2 class="title-animation">Perkirakan biaya fabrikasi PCB Anda</h2>
      </div>

      <!--  -->
      <div class="flex items-center justify-center">
        <!-- Notification Container -->

        <div class="w-full max-w-4xl rounded-xl overflow-hidden pricing">
          <!-- PCB Specifications -->
          <div class="p-6 bg-white rounded-xl border-b">
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
                <i class="fas fa-bullseye mt-1 mr-2"></i>
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
                <i class="fas fa-paint-brush mt-1 mr-2"></i>
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
                      <i class="fas fa-ruler-combined mr-2"></i>
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
                          v-model="length"
                          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#328E6E] input-highlight"
                          placeholder="e.g. 100"
                          min="5"
                          max="400"
                          step="1"
                          @input="updateArea"
                        />
                        <div class="number-input-controls">
                          <div
                            class="number-input-btn up"
                            @click="incrementValue('length')"
                          >
                            <i class="fas fa-chevron-up text-xs"></i>
                          </div>
                          <div
                            class="number-input-btn down"
                            @click="decrementValue('length')"
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
                          v-model="width"
                          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#328E6E] input-highlight"
                          placeholder="e.g. 50"
                          min="5"
                          max="400"
                          step="1"
                          @input="updateArea"
                        />
                        <div class="number-input-controls">
                          <div
                            class="number-input-btn up"
                            @click="incrementValue('width')"
                          >
                            <i class="fas fa-chevron-up text-xs"></i>
                          </div>
                          <div
                            class="number-input-btn down"
                            @click="decrementValue('width')"
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
                          v-model="quantity"
                          class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#328E6E] input-highlight"
                          placeholder="e.g. 10"
                          min="1"
                          step="1"
                          @input="updateArea"
                        />
                        <div class="number-input-controls">
                          <div
                            class="number-input-btn up"
                            @click="incrementValue('quantity')"
                          >
                            <i class="fas fa-chevron-up text-xs"></i>
                          </div>
                          <div
                            class="number-input-btn down"
                            @click="incrementValue('quantity', -1)"
                          >
                            <i class="fas fa-chevron-down text-xs"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- PCB Example Image -->
                <div class="flex items-center justify-center">
                  <img
                    src="https://media.istockphoto.com/id/1316134499/photo/a-concept-image-of-a-magnifying-glass-on-blue-background-with-a-word-example-zoom-inside-the.jpg?s=612x612&w=0&k=20&c=sZM5HlZvHFYnzjrhaStRpex43URlxg6wwJXff3BE9VA="
                    alt="Example PCB"
                    class="pcb-example"
                  />
                </div>
              </div>
            </div>

            <!-- Calculate Button -->
            <div class="mt-6">
              <button
                id="calculateBtn"
                @click="calculate"
                class="w-full btn button"
              >
                <span
                  ><span
                    ><i class="fas fa-calculator mr-2"></i>Calculate PCB
                    Price</span
                  ></span
                >
              </button>
            </div>

            <!-- Results -->
            <div id="results" class="mt-6" :class="{ hidden: !showResults }">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="result-card bg-white p-4 border border-gray-200">
                  <div class="flex items-center">
                    <div class="bg-green-100 p-3 rounded-full mr-3">
                      <i class="fas fa-ruler"></i>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">PCB Area</p>
                      <h3 id="areaResult" class="text-xl font-bold">
                        {{ areaResult }} cm²
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="result-card bg-white p-4 border border-gray-200">
                  <div class="flex items-center">
                    <div class="bg-green-100 p-3 rounded-full mr-3">
                      <i class="fas fa-boxes text-[#328E6E]"></i>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">Quantity</p>
                      <h3 id="quantityResult" class="text-xl font-bold">
                        {{ quantity }}
                      </h3>
                    </div>
                  </div>
                </div>

                <div class="result-card bg-white p-4 border border-gray-200">
                  <div class="flex items-center">
                    <div class="bg-green-100 p-3 rounded-full mr-3">
                      <i class="fas fa-tag text-[#328E6E]"></i>
                    </div>
                    <div>
                      <p class="text-sm text-gray-500">Price per cm²</p>
                      <h3 id="pricePerCm2" class="text-xl font-bold">
                        Rp {{ formatNumber(pricePerCm2) }}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Price Summary -->
              <div
                class="mt-6 bg-gray-50 p-4 result-card border border-gray-200"
              >
                <h3 class="font-semibold text-lg mb-3 flex items-center">
                  <i class="fas fa-receipt mr-2"></i> Price Summary
                </h3>

                <div class="space-y-2">
                  <div class="flex justify-between">
                    <span>Actual Area:</span>
                    <span id="actualArea">{{ actualArea }} cm²</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Calculated Quantity:</span>
                    <span id="calculatedQuantity"
                      >{{ calculatedQuantity }} pcs</span
                    >
                  </div>
                  <div class="flex justify-between">
                    <span>Calculated Area:</span>
                    <span id="calculatedArea">{{ calculatedArea }} cm²</span>
                  </div>

                  <!-- Large Size Surcharge (hidden by default) -->
                  <div id="surchargeContainer" v-if="showSurcharge">
                    <div class="border-t border-gray-200 my-2"></div>
                    <div class="flex justify-between items-center">
                      <span>Large Size Surcharge:</span>
                      <div class="surcharge-badge px-3 py-1 rounded-lg text-sm">
                        <span id="surchargeAmount"
                          >Rp {{ formatNumber(surchargeAmount) }}</span
                        >
                      </div>
                    </div>
                    <div class="text-xs text-gray-500 mt-1">
                      <i class="fas fa-info-circle mr-1"></i>
                      <span id="surchargeDescription">{{
                        surchargeDescription
                      }}</span>
                    </div>
                  </div>

                  <div class="border-t border-gray-200 my-2"></div>
                  <div class="flex justify-between font-bold text-lg">
                    <span>Total Price:</span>
                    <span id="totalPrice" class="text-[#328E6E]"
                      >Rp {{ formatNumber(totalPrice) }}</span
                    >
                  </div>
                  <div class="flex justify-between text-sm text-gray-500">
                    <span>Price per PCB:</span>
                    <span id="pricePerPcb"
                      >Rp {{ formatNumber(pricePerPcb) }}</span
                    >
                  </div>
                </div>
              </div>

              <!-- Tokopedia Order Info -->
              <div
                class="mt-6 bg-green-50 p-4 result-card border border-green-200"
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
                      {{ tokopediaQuantity }} pcs
                    </h3>
                    <p class="text-xs text-gray-500 mt-1">
                      (Rp 1,000 per unit)
                    </p>
                  </div>
                  <div class="tokopedia-badge p-3 rounded-lg text-white">
                    <a target="blank" href="https://www.tokopedia.com/">
                      <i class="fas fa-shopping-cart text-2xl"></i>
                    </a>
                  </div>
                </div>
                <div class="mt-3 text-sm text-gray-600">
                  <p>
                    <i class="fas fa-info-circle mr-1 text-green-500"></i> The
                    actual PCB quantity you'll receive is
                    <span id="actualPcbQuantity" class="font-medium"
                      >{{ actualPcbQuantity }} pcs</span
                    >
                  </p>
                  <p class="mt-1">
                    <i class="fas fa-calculator mr-1 text-green-500"></i> Total
                    price matches:
                    <span id="tokopediaTotal" class="font-medium"
                      >Rp {{ formatNumber(tokopediaTotal) }}</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import "./Price.css";
import { ref, reactive, onMounted, watch, nextTick } from "vue";

// State variables
const length = ref(100);
const width = ref(50);
const quantity = ref(1);
const showResults = ref(false);
const isMobileMenuOpen = ref(false);
const isNotificationVisible = ref(false);
const notificationMessage = ref("");
const notificationType = ref("error");
const usdToIdrRate = ref(16000);

// Chart reference
const priceChart = ref(null);
let chartInstance = null;

// Results
const areaResult = ref("0.00");
const actualArea = ref("0.00");
const calculatedQuantity = ref(0);
const calculatedArea = ref("0.00");
const pricePerCm2 = ref(0);
const totalPrice = ref(0);
const pricePerPcb = ref(0);
const tokopediaQuantity = ref(0);
const actualPcbQuantity = ref(0);
const tokopediaTotal = ref(0);
const showSurcharge = ref(false);
const surchargeAmount = ref(0);
const surchargeDescription = ref("");

// Print data
const invoiceDate = ref("");
const printDimensions = ref("0 mm x 0 mm");

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const showNotification = (message, type = "error") => {
  notificationMessage.value = message;
  notificationType.value = type;
  isNotificationVisible.value = true;

  // Auto-hide after 5 seconds
  setTimeout(() => {
    hideNotification();
  }, 5000);
};

const hideNotification = () => {
  isNotificationVisible.value = false;
};

const updateArea = () => {
  const lengthVal = parseFloat(length.value) || 0;
  const widthVal = parseFloat(width.value) || 0;
  const area = (lengthVal * widthVal) / 100;

  if (lengthVal > 0 && widthVal > 0) {
    areaResult.value = area.toFixed(2);
  } else {
    areaResult.value = "0.00";
  }
};

const incrementValue = (field, amount = 1) => {
  const input =
    field === "length" ? length : field === "width" ? width : quantity;
  const max = field === "length" || field === "width" ? 400 : Infinity;
  const min = field === "length" || field === "width" ? 5 : 1;

  let value = parseFloat(input.value) || 0;
  if (amount > 0 && value < max) {
    input.value = value + amount;
  } else if (amount < 0 && value > min) {
    input.value = value + amount;
  }
  updateArea();
};

const decrementValue = (field) => {
  const input =
    field === "length" ? length : field === "width" ? width : quantity;
  const min = field === "length" || field === "width" ? 5 : 1;

  let value = parseFloat(input.value) || 0;
  if (value > min) {
    input.value = value - 1;
    updateArea();
  }
};

const validateInputs = () => {
  const lengthVal = parseFloat(length.value) || 0;
  const widthVal = parseFloat(width.value) || 0;

  if (lengthVal < 5 || widthVal < 5) {
    showNotification("Minimum PCB dimensions are 5mm × 5mm");
    return false;
  }

  if (lengthVal > 400 || widthVal > 400) {
    showNotification("Maximum PCB dimensions are 400mm × 400mm");
    return false;
  }

  return true;
};

const fetchExchangeRate = async () => {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    const data = await response.json();
    if (data && data.rates && data.rates.IDR) {
      usdToIdrRate.value = data.rates.IDR;
      console.log("Current USD to IDR rate:", usdToIdrRate.value);
    }
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    // Use default rate if API fails
    usdToIdrRate.value = 16000;
  }
};

const hitungHargaLayoticLengkap = (panjang_cm, lebar_cm, jumlah_pcs_aktual) => {
  // 1. Calculate area per PCB
  const luas_per_keping = panjang_cm * lebar_cm;

  // 2. Apply quantity rounding to multiples of 5
  let jumlah_pcs_dihitung = Math.ceil(jumlah_pcs_aktual / 5) * 5;
  if (jumlah_pcs_dihitung < 5) {
    jumlah_pcs_dihitung = 5;
  }

  // 3. Calculate total actual area
  const total_luas_aktual_cm2 = luas_per_keping * jumlah_pcs_dihitung;

  // 4. Apply minimum order area rule (500 cm²)
  const luas_final_dihitung_cm2 = Math.max(500, total_luas_aktual_cm2);

  // --- Harga Dasar Berdasarkan Dimensi (JLC Base Cost) ---
  const JLC_BASE_COST_FOR_5PCS_USD_TIERS = [
    { max_dim_threshold: 100, cost_usd: 2.0 },
    { max_dim_threshold: 103, cost_usd: 8.1 },
    { max_dim_threshold: 105, cost_usd: 8.2 },
    { max_dim_threshold: 110, cost_usd: 8.6 },
    { max_dim_threshold: 120, cost_usd: 9.5 },
    { max_dim_threshold: 200, cost_usd: 19.2 },
    { max_dim_threshold: 250, cost_usd: 19.2 },
  ];

  // Menentukan biaya dasar berdasarkan ukuran PCB
  let base_cost_usd = 0;
  const max_dim = Math.max(panjang_cm, lebar_cm); // Ambil dimensi terbesar

  for (const tier of JLC_BASE_COST_FOR_5PCS_USD_TIERS) {
    if (max_dim <= tier.max_dim_threshold) {
      base_cost_usd = tier.cost_usd;
      break;
    }
  }

  // --- Skala Biaya Tambahan Untuk Dimensi Besar (Surcharge) ---
  const SURCHARGE_TIERS = [
    { maxDim: 250, surcharge: 0.0 },
    { maxDim: 260, surcharge: 3.7 },
    { maxDim: 270, surcharge: 7.5 },
    { maxDim: 280, surcharge: 11.3 },
    { maxDim: 350, surcharge: 49.3 },
    { maxDim: 400, surcharge: 83.7 },
  ];

  const max_dim_mm = Math.max(panjang_cm * 10, lebar_cm * 10); // Konversi ke mm
  let surcharge_usd = 0;

  // Hitung luas dalam mm² untuk menentukan surcharge
  const luas_mm2 = panjang_cm * 10 * lebar_cm * 10; // Konversi ke mm²

  // Hanya terapkan surcharge jika luas >= 62500 mm²
  if (luas_mm2 >= 62500) {
    for (let tier of SURCHARGE_TIERS) {
      if (max_dim_mm <= tier.maxDim) {
        surcharge_usd = tier.surcharge;
        break;
      }
    }
  }

  // --- Biaya Berdasarkan Area PCB ---
  const LAYOTIC_AREA_PRICE_PER_CM2_SCHEME = {
    harga_dasar_cm2: 900,
    threshold_diskon_cm2: 1200,
    harga_minimum_cm2: 300,
    luas_capai_minimum_cm2: 5100,
  };

  let harga_per_cm2 = 0;
  if (
    luas_final_dihitung_cm2 <=
    LAYOTIC_AREA_PRICE_PER_CM2_SCHEME.threshold_diskon_cm2
  ) {
    harga_per_cm2 = LAYOTIC_AREA_PRICE_PER_CM2_SCHEME.harga_dasar_cm2;
  } else {
    const slope =
      (LAYOTIC_AREA_PRICE_PER_CM2_SCHEME.harga_minimum_cm2 -
        LAYOTIC_AREA_PRICE_PER_CM2_SCHEME.harga_dasar_cm2) /
      (LAYOTIC_AREA_PRICE_PER_CM2_SCHEME.luas_capai_minimum_cm2 -
        LAYOTIC_AREA_PRICE_PER_CM2_SCHEME.threshold_diskon_cm2);

    harga_per_cm2 =
      LAYOTIC_AREA_PRICE_PER_CM2_SCHEME.harga_dasar_cm2 +
      slope *
        (luas_final_dihitung_cm2 -
          LAYOTIC_AREA_PRICE_PER_CM2_SCHEME.threshold_diskon_cm2);

    harga_per_cm2 = Math.max(
      harga_per_cm2,
      LAYOTIC_AREA_PRICE_PER_CM2_SCHEME.harga_minimum_cm2
    );
  }

  // 5. Hitung biaya total (dengan surcharge untuk PCB besar)
  const surcharge_in_idr = Math.round(surcharge_usd * usdToIdrRate.value);
  const total_biaya =
    luas_final_dihitung_cm2 * harga_per_cm2 + surcharge_in_idr;

  // 6. Menghitung jumlah unit Tokopedia (Rp 1000 per unit)
  const harga_per_unit_tokopedia = 1000;
  const jumlah_pcs_tokopedia = Math.ceil(
    total_biaya / harga_per_unit_tokopedia
  );

  // Calculate actual price per cm² (total price / calculated area)
  const actual_price_per_cm2 = total_biaya / luas_final_dihitung_cm2;

  return {
    panjang_cm: panjang_cm,
    lebar_cm: lebar_cm,
    jumlah_pcs_aktual: jumlah_pcs_aktual,
    jumlah_pcs_dihitung: jumlah_pcs_dihitung,
    luas_per_keping: luas_per_keping,
    total_luas_aktual_cm2: total_luas_aktual_cm2,
    luas_final_dihitung_cm2: luas_final_dihitung_cm2,
    harga_per_cm2: Math.round(harga_per_cm2),
    actual_price_per_cm2: actual_price_per_cm2,
    total_biaya: Math.round(total_biaya),
    surcharge_usd: surcharge_usd,
    surcharge_in_idr: surcharge_in_idr,
    price_per_pcb: Math.round(total_biaya / jumlah_pcs_dihitung),
    harga_per_unit_tokopedia: harga_per_unit_tokopedia,
    jumlah_pcs_tokopedia: jumlah_pcs_tokopedia,
  };
};

const createPriceChart = (calculatedAreaVal, actualPricePerCm2Val) => {
  const chartElement = priceChart.value;
  if (!chartElement) return;

  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(chartElement, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Price per cm²",
          data: [
            {
              x: calculatedAreaVal,
              y: actualPricePerCm2Val,
            },
          ],
          backgroundColor: "#328E6E",
          borderColor: "#328E6E",
          pointRadius: 8,
          pointHoverRadius: 10,
          showLine: false,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return `Rp ${context.parsed.y.toFixed(
                0
              )} per cm² at ${context.parsed.x.toFixed(0)} cm²`;
            },
          },
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          titleColor: "#1a6e4e",
          bodyColor: "#4b5563",
          borderColor: "#e5e7eb",
          borderWidth: 1,
          padding: 12,
        },
      },
      scales: {
        x: {
          type: "linear",
          position: "bottom",
          title: {
            display: true,
            text: "PCB Area (cm²)",
            color: "#4b5563",
          },
          min: Math.max(0, calculatedAreaVal - 500),
          max: calculatedAreaVal + 500,
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            color: "#6b7280",
          },
        },
        y: {
          title: {
            display: true,
            text: "Price per cm² (Rp)",
            color: "#4b5563",
          },
          min: Math.max(0, actualPricePerCm2Val - 100),
          max: Math.min(900 + 50, actualPricePerCm2Val + 100),
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            color: "#6b7280",
          },
        },
      },
    },
  });
};

const calculate = () => {
  // Validate inputs first
  if (!validateInputs()) {
    return;
  }

  // Get input values
  const lengthVal = parseFloat(length.value) || 0;
  const widthVal = parseFloat(width.value) || 0;
  const quantityVal = parseInt(quantity.value) || 1;

  if (lengthVal <= 0 || widthVal <= 0) {
    showNotification(
      "Please enter valid dimensions for your PCB (length and width must be greater than 0)"
    );
    return;
  }

  // Convert dimensions to cm
  const length_cm = lengthVal / 10;
  const width_cm = widthVal / 10;

  // Calculate area in cm²
  const area = (lengthVal * widthVal) / 100;

  // Use Layotic pricing model with quantity rounding and Tokopedia conversion
  const result = hitungHargaLayoticLengkap(length_cm, width_cm, quantityVal);

  // Update reactive state with results
  areaResult.value = area.toFixed(2);
  actualArea.value = (
    result.luas_per_keping * result.jumlah_pcs_aktual
  ).toFixed(2);
  calculatedQuantity.value = result.jumlah_pcs_dihitung;
  calculatedArea.value = result.luas_final_dihitung_cm2.toFixed(2);
  pricePerCm2.value = Math.round(result.actual_price_per_cm2);
  totalPrice.value = result.total_biaya;
  pricePerPcb.value = result.price_per_pcb;
  tokopediaQuantity.value = result.jumlah_pcs_tokopedia;
  actualPcbQuantity.value = result.jumlah_pcs_dihitung;
  tokopediaTotal.value = result.jumlah_pcs_tokopedia * 1000;

  // Show/hide surcharge information based on PCB size
  if (result.surcharge_usd > 0) {
    showSurcharge.value = true;
    surchargeAmount.value = result.surcharge_in_idr;
    surchargeDescription.value = `Additional cost for PCBs larger than 250mm × 250mm (${Math.max(
      lengthVal,
      widthVal
    )}mm exceeds 250mm limit)`;
  } else {
    showSurcharge.value = false;
  }

  // Update print data
  const now = new Date();
  invoiceDate.value = now.toLocaleDateString();
  printDimensions.value = `${lengthVal.toFixed(1)} mm x ${widthVal.toFixed(
    1
  )} mm`;

  // Create price chart with actual price per cm²
  nextTick(() => {
    createPriceChart(
      result.luas_final_dihitung_cm2,
      result.actual_price_per_cm2
    );
  });

  // Show results section
  showResults.value = true;

  // Scroll to results
  nextTick(() => {
    document.getElementById("results").scrollIntoView({ behavior: "smooth" });
  });
};

const printQuotation = () => {
  // Show the printable invoice
  document.getElementById("printableInvoice").classList.remove("hidden");

  // Wait a moment for the DOM to update
  setTimeout(() => {
    window.print();

    // Hide it again after printing
    setTimeout(() => {
      document.getElementById("printableInvoice").classList.add("hidden");
    }, 500);
  }, 100);
};

const formatNumber = (num) => {
  return num.toLocaleString();
};

// Lifecycle hooks
onMounted(() => {
  // Fetch current exchange rate when component mounts
  fetchExchangeRate();

  // Initialize area calculation
  updateArea();

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const mobileMenuButton = document.querySelector(".mobile-menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (
      mobileMenuButton &&
      navLinks &&
      !mobileMenuButton.contains(event.target) &&
      !navLinks.contains(event.target)
    ) {
      isMobileMenuOpen.value = false;
    }
  });
});

// Watch for changes to update area
watch([length, width], () => {
  updateArea();
});
</script>
