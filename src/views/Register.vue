<template>
  <div class="main-div">
   <!-- Page Header -->
     <header>
      <login-sign-nav></login-sign-nav>
    </header>
    <!-- Page content -->
    <b-container class="mt--8 pb-5">
      <!-- Table -->
      <b-row class="justify-content-center">
        <b-col lg="6" md="8">
          <b-card no-body class="bg-secondary border-0">
            <b-card-header class="bg-oauth pb-5">
              <div class="text-black text-center mt-2 mb-4">
                <small>Sign up with</small>
              </div>
              <div class="text-center">
                <a href="#" class="btn btn-neutral btn-icon mr-4">
                  <span class="btn-inner--icon"
                    ><img src="../assets/github.svg"
                  /></span>
                  <span class="btn-inner--text">Github</span>
                </a>
                <a href="#" class="btn btn-neutral btn-icon">
                  <span class="btn-inner--icon"
                    ><img src="../assets/google.svg"
                  /></span>
                  <span class="btn-inner--text">Google</span>
                </a>
              </div>
            </b-card-header>
            <b-card-body class="px-lg-5 py-lg-5">
              <div class="text-center text-white mb-4">
                <small>Or sign up with credentials</small>
              </div>
              <b-form role="form" @submit.prevent="handleSubmit(onSubmit)">
                <b-input
                  required
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-hat-3"
                  placeholder="First Name"
                  name="firstName"
                  :rules="{ required: true }"
                  v-model="model.firstName"
                >
                </b-input>

                <b-input
                  required
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-hat-3"
                  placeholder="Last Name"
                  name="lastName"
                  :rules="{ required: true }"
                  v-model="model.lastName"
                >
                </b-input>

                <b-input
                  required
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-hat-3"
                  placeholder="Social Security Number"
                  name="ssn"
                  :rules="{ required: true }"
                  v-model="model.ssn"
                >
                </b-input>

                <b-input
                  required
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-email-83"
                  placeholder="Email"
                  name="Email"
                  :rules="{ required: true, email: true }"
                  v-model="model.email"
                >
                </b-input>

                <b-input
                  required
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-lock-circle-open"
                  placeholder="Password"
                  type="password"
                  name="Password"
                  :rules="{ required: true, min: 6 }"
                  v-model="model.password"
                >
                </b-input>

                <b-input
                  required
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-lock-circle-open"
                  placeholder="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  :rules="{ required: true, min: 6 }"
                  v-model="model.confirmPassword"
                >
                </b-input>

                <b-input
                  required
                  alternative
                  class="mb-3"
                  prepend-icon="ni ni-lock-circle-open"
                  placeholder="Phone Number"
                  type="phoneNumber"
                  name="phoneNumber"
                  :rules="{ required: true, min: 6 }"
                  v-model="model.phoneNumber"
                >
                </b-input>
                <div class="text-center">
                  <b-button @click.prevent="onSubmit" type="submit" variant="success" class="signup-btn"
                    >Sign Up</b-button
                  >
                  <b-button class="login-btn" href="/login">Login</b-button>
                </div>
              </b-form>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { API } from '../config/api'
import  LoginSignNav from '../components/LoginSignNav.vue'

export default {
  components: {
    LoginSignNav,
  },
  name: 'register',
  data() {
    return {
      model: {
        firstName: '',
        lastName: '',
        ssn: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
      },
    }
  },
  methods: {
    async onSubmit() {
      
        API.post('auth/signup', {
          firstName: this.model.firstName,
          lastName: this.model.lastName,
          email: this.model.email,
          SSN: this.model.ssn,
          password: this.model.password,
          confirmPassword: this.model.confirmPassword,
          phoneNumber: this.model.phoneNumber,
        }).then((response) => {
          const userID = response.data
          if (userID._id != null ) {
            this.$vToastify.success('Your new account has been registered!')
            localStorage.setItem('token', response.data.token)
            this.$router.push('/home')
          } 
        }).catch(error =>{
        this.$vToastify.error(error.response.data)
        console.log(error)
      })
      }
    },
}
</script>
<style scoped>
.header {
  background-image: url(../assets/neon-city.png);
  padding-top: 2%;
}
.main-div{
  background-image: url(../assets/earth.png);
}
.bg-oauth {
  background-color: #ccf381;
}
.px-lg-5 {
  background-color: #4831d4;
}
.mt--8 {
  padding-top: 5%;
}
.signup-btn {
  margin-left: 3%;
  margin-top: 5%  
}
.login-btn {
  margin-left: 6%;
  margin-top: 5%
}
</style>
