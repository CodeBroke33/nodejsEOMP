<template>
  <section class="vh-100 bg-black">
    <div class="main bg-black mt-5">
      <div class="row bg-black">

        <!-- First Column -->
        <div class="contact col my-5">
          <div class="h-100">
            <div class="card-body">
              <h1 class="heading text-white fs-1">Contact Us</h1>
              <p class="text-white my-5">Contact Number: <strong class="text-white">068 373 5646</strong></p>
              <p class="text-white my-5">Email Address: <strong class="text-white"><u>ONLYWATER@GMAIL.COM</u></strong></p>
              <p class="text-white my-5">FIND US ON VARIOUS PLATFORMS </p>         
              <!-- Social media Icons -->
              <div class="social-icons">
                <a href="https://twitter.com" target="_blank" class="btn btn-info "><i class="bi bi-twitter"></i></a>
                <a href="https://slack.com" target="_blank" class="btn btn-info"><i class="bi bi-slack"></i></a>
                <a href="https://facebook.com" target="_blank" class="btn btn-info"><i class="bi bi-facebook"></i></a>
                <a href="https://github.com" target="_blank" class="btn btn-info"><i class="bi bi-github"></i></a>
              </div>
            </div> 
          </div>
        </div>
        <!-- Second Column -->
        <div class="col-md-6 bg-black text-white my-5 mx-4">
          <div class="h-100">
            <div class="card-body">
              <h5 class="card-title"></h5>

              <!-- Contact Form -->
              <form method="POST" action="https://formspree.io/f/mvoerbey">
                <!-- Name Input -->
                <div class="mb-3">
                  <label for="name" class="form-label">Name</label>
                  <input type="text" class="form-control" id="name" name="name" required>
                </div>

                <!-- Email Input -->
                <div class="mb-3"> 
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" name="email" required>
                </div>

                <!-- Message Input -->
                <div class="mb-3">
                  <label for="message" class="form-label">Message</label>
                  <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
                </div>

                <!-- Send Button -->
                <button type="submit" class="btn btn-info">Send</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'ContactPage',
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Jacques+Francois+Shadow&display=swap');

 *,
::after,
::before{
  overflow-x: hidden;
} 

h1 {
  font-family: 'Jacques Francois Shadow', cursive;
  font-size: 5rem;
}

.heading{
  font-size: 7rem !important ;
  overflow: hidden;
}

.form-label {
  font-family: 'Jacques Francois Shadow', cursive;
  font-size: 1em;
}

.btn {
  border-radius: 50%;
  justify-content: space-between ;
}
</style>
