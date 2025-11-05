### **Lesson 8: Advanced Form Elements - Classwork Assignment**

#### **Objective:**

In this lesson, students will continue enhancing their **user registration form** by adding advanced form elements such as dropdowns, text areas, and reset buttons. They will also ensure that the form is accessible by including `accesskey` and `tabindex` attributes for better keyboard navigation.

---

### **Step-by-Step Guide:**

1. **Open Your Existing HTML File**:

   - Open the `index.html` file you created in previous lessons inside the `user-registration-form` folder.
   - You will now continue building the form by adding advanced input elements with `accesskey` and `tabindex` attributes for accessibility.

2. **Add a Dropdown (Select) for Gender with Accessibility**:

   - Add a `<select>` dropdown field for the user to choose their **gender**. Include the `accesskey` and `tabindex` attributes to improve accessibility:
     ```html
     <label for="gender" accesskey="g">Gender (Alt + G):</label>
     <select id="gender" name="gender" tabindex="6" required>
       <option value="">Select your gender</option>
       <option value="male">Male</option>
       <option value="female">Female</option>
       <option value="other">Other</option></select
     ><br /><br />
     ```

3. **Add a Textarea for Address Input with Accessibility**:

   - Add a `<textarea>` element for the user to provide their **address**. The `accesskey` and `tabindex` attributes should be included:
     ```html
     <label for="address" accesskey="a">Address (Alt + A):</label><br />
     <textarea
       id="address"
       name="address"
       rows="4"
       cols="50"
       tabindex="7"
       required
     ></textarea
     ><br /><br />
     ```

4. **Add Submit and Reset Buttons with Accessibility**:

   - Update the submit and reset buttons to ensure they are accessible with the `accesskey` and `tabindex` attributes:
     ```html
     <button type="submit" accesskey="r" tabindex="8">
       Register (Alt + R)
     </button>
     <button type="reset" accesskey="x" tabindex="9">
       Reset Form (Alt + X)
     </button>
     ```

5. **Save and Preview Your Form**:

   - Save your `index.html` file.
   - Open it in a browser and test the form fields. Use the `accesskey` shortcuts (e.g., `Alt + G` to focus on the Gender dropdown) and check that the `tabindex` allows for smooth navigation through the form fields.

6. **Submit Your Work**:
   - Once you've confirmed the form works as expected, submit the following:
     - The zipped `user-registration-form` folder with the updated `index.html` file.
   - Upload it to the classwork assignment on Google Classroom

---

### **Assessment Criteria**:

1. **Correct Use of Advanced Form Elements with Accessibility**:

   - The form includes a dropdown for selecting gender, a multi-line `<textarea>` for the address, and buttons for submitting and resetting the form.
   - Each form element uses `accesskey` and `tabindex` for better accessibility and keyboard navigation.

2. **Accessibility Features**:

   - `accesskey` attributes allow users to navigate the form using keyboard shortcuts.
   - `tabindex` ensures logical and intuitive keyboard navigation through the form fields.

3. **File Structure and Submission**:
   - The HTML file is well-organized and properly formatted.
