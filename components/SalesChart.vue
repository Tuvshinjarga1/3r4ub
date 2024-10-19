<template>
  <div class="mt-5">
    <p class="font-bold">Дахин боловсруулсан хог хаягдал</p>
    <div class="mt-5 h-[300px] rounded-lg border bg-background md:p-3">
      <Line :data="data" :options="options" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import colors from "#tailwind-config/theme/colors";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { Line } from "vue-chartjs";

  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const mode = useColorMode();

  const options = computed<ChartOptions<"line">>(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          intersect: false,
        },
      },
      scales: {
        y: {
          grid: {
            color: mode.value === "dark" ? colors.slate[900] : colors.slate[200],
          },
          ticks: {
            color: colors.slate[500],
          },
        },
        x: {
          grid: {
            color: mode.value === "dark" ? colors.slate[800] : colors.slate[200],
          },
          ticks: {
            color: colors.slate[500],
          },
        },
      },
    };
  });

  const data = ref<ChartData<"line">>({
    labels: ["1-р сар", "2-р сар", "3-р сар", "4-р сар", "5-р сар", "6-р сар", "7-р сар"],
    datasets: [
      {
        label: "боловсруулсан тонн",
        backgroundColor: colors.background,
        tension: 0.4,
        borderColor: colors.blue[500],
        borderWidth: 2,
        pointBackgroundColor: colors.blue[500],
        data: [40, 39, 10, 40, 39, 80, 40],
      },
    ],
  });
</script>
