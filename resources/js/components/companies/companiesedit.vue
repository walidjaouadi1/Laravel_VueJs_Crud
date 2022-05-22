<template>
    <div class="container mt-5">
        <div class="row" v-if="errors !== ''">
            {{ errors }}
        </div>
        <h1 class="text-center">Edit item</h1>
        <form @submit.prevent="saveCompany">
            <div class="row justify-content-center">
                <div class="col-6 mb-3">
                    <label for="exampleFormControlInput1" class="form-label"
                        >Name</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Name"
                        v-model="company.name"
                    />
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6 mb-3">
                    <label for="exampleFormControlInput2" class="form-label"
                        >Email</label
                    >
                    <input
                        type="email"
                        class="form-control"
                        id="exampleFormControlInput2"
                        placeholder="Email"
                        v-model="company.email"
                    />
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6 mb-3">
                    <label for="exampleFormControlInput3" class="form-label"
                        >Address</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput3"
                        placeholder="Address"
                        v-model="company.address"
                    />
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6 mb-3">
                    <label for="exampleFormControlInput4" class="form-label"
                        >Website</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput4"
                        placeholder="Website..."
                        v-model="company.website"
                    />
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-6 mb-3">
                    <button type="submit" class="btn btn-primary">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import useCompanies from "../../composables/companies";
import axios from "axios";
export default {
    props: {
        id: {
            required: true,
            type: String,
        },
    },

    setup(props) {
        const { company, errors, getCompany, updateCompany } = useCompanies();

        onMounted(getCompany(props.id));

        const saveCompany = async () => {
            await updateCompany(props.id);
        };

        return {
            company,
            errors,
            saveCompany,
        };
    },
};
</script>
