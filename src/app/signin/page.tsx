import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign In Page for Startup Nextjs Template",
  // other metadata
};

const SigninPage = () => {
  return (
    <>
      <section className="relative z-10 overflow-hidden pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <form id="user-profile-form">
          {/* <!-- Personal Info --> */}
          <fieldset>
            <legend>👤 Personal Information</legend>

            <label htmlFor="full-name">Full Name</label>
            <input
              type="text"
              id="full-name"
              name="full_name"
              placeholder="Ashish Kumar"
              required
            />

            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              required
            />

            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+91-9876543210"
            />

            <label htmlFor="dob">Date of Birth</label>
            <input type="date" id="dob" name="dob" required />

            <label htmlFor="gender-male">
              <input type="radio" id="gender-male" name="gender" value="male" />{" "}
              Male
            </label>
            <label htmlFor="gender-female">
              <input
                type="radio"
                id="gender-female"
                name="gender"
                value="female"
              />{" "}
              Female
            </label>
            <label htmlFor="gender-other">
              <input
                type="radio"
                id="gender-other"
                name="gender"
                value="other"
              />{" "}
              Other
            </label>
          </fieldset>

          {/* <!-- Account Preferences --> */}
          <fieldset>
            <legend>⚙️ Account Settings</legend>

            <label htmlFor="username">Username</label>
            <input type="text" placeholder="Enter username" />

            <label htmlFor="password">New Password</label>
            <input type="password" placeholder="Enter password" />

            <label htmlFor="profile-pic">Profile Picture</label>
            <input type="file" accept="image/*" />

            <label htmlFor="website">Personal Website</label>
            <input type="url" placeholder="Enter website" />

            <label htmlFor="theme">Preferred Theme</label>
            <select name="theme">
              <option value="">Select a theme</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="system">System Default</option>
            </select>

            <label htmlFor="languages">Languages Known</label>
            <select id="languages" name="languages" multiple>
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="japanese">Japanese</option>
              <option value="french">French</option>
            </select>
          </fieldset>

          {/* <!-- User Preferences --> */}
          <fieldset>
            <legend>💬 Preferences</legend>

            <label htmlFor="notifications">
              <input
                type="checkbox"
                id="notifications"
                name="preferences"
                value="notifications"
              />{" "}
              Email Notifications
            </label>
            <label htmlFor="newsletter">
              <input
                type="checkbox"
                id="newsletter"
                name="preferences"
                value="newsletter"
              />{" "}
              Weekly Newsletter
            </label>
            <label htmlFor="product-updates">
              <input
                type="checkbox"
                id="product-updates"
                name="preferences"
                value="product_updates"
              />{" "}
              Product Updates
            </label>

            <label htmlFor="bio">Short Bio</label>
            <textarea
              id="bio"
              name="bio"
              rows={4}
              placeholder="Tell us a bit about yourself..."
            ></textarea>
          </fieldset>

          {/* <!-- Availability --> */}
          <fieldset>
            <legend>📅 Availability</legend>

            <label htmlFor="available-from">Available From</label>
            <input
              type="datetime-local"
              id="available-from"
              name="available_from"
            />

            <label htmlFor="work-hours">Preferred Working Hours</label>
            <input type="time" id="work-hours" name="work_hours" />

            <label htmlFor="experience">Years of Experience</label>
            <input
              type="number"
              id="experience"
              name="experience"
              min="0"
              max="50"
            />

            <label htmlFor="expected-salary">Expected Salary</label>
            <input
              type="range"
              id="expected-salary"
              name="expected_salary"
              min="20000"
              max="200000"
              step="1000"
            />
          </fieldset>

          {/* <!-- Hidden Metadata --> */}
          <input type="hidden" name="referral_code" value="XYZ123" />

          <button type="submit">Submit Profile</button>
        </form>
      </section>
    </>
  );
};

export default SigninPage;
