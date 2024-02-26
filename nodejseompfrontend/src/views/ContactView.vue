<template>
  <section class="vh-100 bg-dark">
    <div class="main bg-dark container mt-5">
      <div class="row bg-dark">

        <!-- First Column -->
        <div class="col-md-6 bg-dark text-white">
          <div class="card h-100">
            <div class="card-body">
              <h1>Contact Us</h1>
              <p>Contact Number: <strong>068 373 5646</strong></p>
              <p>Email Address: <strong><u>ONLYWATER@GMAIL.COM</u></strong></p>
              <p>FIND US ON VARIOUS PLATFORMS </p>         
              <!-- Social media Icons -->
              <div class="social-icons">
                <a href="https://twitter.com" target="_blank" class="btn btn-primary"><i class="bi bi-twitter"></i></a>
                <a href="https://slack.com" target="_blank" class="btn btn-primary"><i class="bi bi-slack"></i></a>
                <a href="https://facebook.com" target="_blank" class="btn btn-primary"><i class="bi bi-facebook"></i></a>
                <a href="https://github.com" target="_blank" class="btn btn-primary"><i class="bi bi-github"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!-- Second Column -->
        <div class="col-md-6 bg-dark text-white">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Contact Form</h5>

              <!-- Contact Form -->
              <form method="post">
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
                <button type="submit" class="btn btn-primary">Send</button>
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

.bg-dark {
  background-color: #000 !important;
}
.text-white {
  color: #fff !important;
}
</style>
