<template>
    <div class="container">
        <div class="row mb-5">
            <h1 class="text-center">Laravel & Vue js 3 Crud</h1>
        </div>
        <div class="row justify-content-end">
            <div class="col-3 text-end">
                <router-link
                    :to="{ name: 'companies.create' }"
                    class="btn btn-primary mb-4"
                    >Create</router-link
                >
            </div>
        </div>
        <table class="table table-bordered text-center">
            <thead class="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Website</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in companies" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.email }}</td>
                    <td>{{ item.address }}</td>
                    <td>{{ item.website }}</td>
                    <td>
                        <router-link
                            :to="{
                                name: 'companies.edit',
                                params: { id: item.id },
                            }"
                            class="btn btn-info"
                            >Edit</router-link
                        >
                        <button
                            @click="deleteCompany(item.id)"
                            class="btn btn-danger"
                        >
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import useCompanies from "../../composables/companies";
export default {
    name: "CompaniesIndex",
    setup() {
        const { companies, getCompanies, destroyCompany } = useCompanies();

        onMounted(getCompanies);

        const deleteCompany = async (id) => {
            if (!window.confirm("Are You Sure !")) {
                return;
            }
            await destroyCompany(id);
            await getCompanies();
        };

        return {
            companies,
            deleteCompany,
        };
    },
};
</script>

<style lang="scss">
.table a {
    margin-right: 5px;
}
</style>
