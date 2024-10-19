<template>
  <div class="mt-5">
    <p class="font-bold">Тус бүрийн үнэ</p>

    <div
      class="mt-5 overflow-x-auto rounded-md border bg-background scrollbar-thin scrollbar-thumb-input scrollbar-thumb-rounded-md"
    >
      <table class="w-full border-collapse">
        <thead>
          <tr class="border-b text-left text-xs">
            <th class="p-4 font-medium uppercase text-muted-foreground">Нэр</th>
            <th class="p-4 font-medium uppercase text-muted-foreground">Хэмжээ</th>
            <th class="p-4 font-medium uppercase text-muted-foreground">Үнэ</th>
            <th class="p-4 font-medium uppercase text-muted-foreground"></th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(product, index) in recyclingProducts"
            :key="index"
            class="border-b text-left text-sm last:border-b-0 hover:bg-muted"
          >
            <td class="p-4">{{ product.name }}</td>
            <td class="p-4">{{ product.quantity }}</td>
            <td class="p-4">{{ product.price }}</td>
            <td class="p-4">
              <div class="flex items-center gap-3">
                <button>
                  <Icon name="heroicons:pencil" class="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recyclingProducts: [
        { name: 'Хуванцар сав', quantity: '1ш', price: '100 төгрөг' },
        { name: 'Цаас', quantity: '1кг', price: '500 төгрөг' },
        { name: 'Шилэн сав', quantity: '1ш', price: '300 төгрөг' },
        { name: 'Металл лааз', quantity: '1ш', price: '200 төгрөг' },
        { name: 'Картон хайрцаг', quantity: '1кг', price: '400 төгрөг' },
        { name: 'Гялгар уут', quantity: '1ш', price: '50 төгрөг' },
      ],
    };
  },
};
</script>
