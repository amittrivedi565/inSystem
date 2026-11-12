# Frontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.2.22.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



<div class="employee-details-page">
    <!-- Employee Header -->
    <div class="employee-banner text-white px-3 px-md-4 pt-4 pb-5">

        <div class="d-flex flex-column flex-md-row
                    justify-content-between align-items-start gap-3">

            <div class="d-flex flex-column gap-3">

                <div class="d-flex flex-wrap align-items-center gap-3">

                    <h2 class="fw-semibold mb-0">
                        Rajesh Sharma
                    </h2>

                    <span class="employee-status">
                        Active
                    </span>

                </div>

                <div class="d-flex flex-wrap align-items-center gap-3 small">

                    <span>Employee ID <strong>EMP-0001</strong></span>

                    <span class="d-none d-md-inline">|</span>

                    <span>Project Manager</span>

                    <span class="d-none d-md-inline">|</span>

                    <span>Engineering Department</span>

                </div>

            </div>

            <!-- Header Actions -->
            <div class="d-flex align-items-center gap-2">

                <button class="btn btn-sm text-white border-0">
                    <i class="bi bi-three-dots fs-5"></i>
                </button>

                <button class="btn btn-outline-light btn-sm px-4">
                    <i class="bi bi-pencil me-1"></i>
                    Edit
                </button>

                <button class="btn btn-light btn-sm px-3">
                    View Profile
                </button>

            </div>

        </div>

    </div>

    <!-- Abstract Decorative Strip -->
    <div class="employee-banner-strip"></div>

    <!-- Employee Summary -->
    <div class="container-fluid px-3 px-md-4 py-4">

        <div class="row g-4">

            <div class="col-6 col-lg-3">
                <div class="detail-label">Department</div>
                <div class="detail-value">Engineering</div>
            </div>

            <div class="col-6 col-lg-3">
                <div class="detail-label">Designation</div>
                <div class="detail-value">Project Manager</div>
            </div>

            <div class="col-6 col-lg-3">
                <div class="detail-label">Reporting Manager</div>
                <div class="detail-value">Amit Kumar</div>
            </div>

            <div class="col-6 col-lg-3">
                <div class="detail-label">Branch</div>
                <div class="detail-value">Head Office, Indore</div>
            </div>

            <div class="col-6 col-lg-3">
                <div class="detail-label">Joining Date</div>
                <div class="detail-value">15 Jan 2024</div>
            </div>

            <div class="col-6 col-lg-3">
                <div class="detail-label">Employment Type</div>
                <div class="detail-value">Permanent</div>
            </div>

            <div class="col-6 col-lg-3">
                <div class="detail-label">Work Email</div>
                <div class="detail-value">rajesh.sharma@insystem.in</div>
            </div>

            <div class="col-6 col-lg-3">
                <div class="detail-label">Mobile Number</div>
                <div class="detail-value">+91 98260 12345</div>
            </div>

        </div>

    </div>

    <!-- Navigation Tabs -->
    <div class="employee-details-tabs px-3 px-md-4">

        <div class="d-flex align-items-center gap-4 overflow-x-auto">

            <a href="/" class="employee-detail-tab active">
                Overview
            </a>

            <a href="/" class="employee-detail-tab">
                Employment
            </a>

            <a href="/" class="employee-detail-tab">
                Contact & Address
            </a>

            <a href="/" class="employee-detail-tab">
                Education & Experience
            </a>

            <a href="/" class="employee-detail-tab">
                Bank & Statutory
            </a>

            <a href="/" class="employee-detail-tab">
                Documents
            </a>

            <a href="/" class="employee-detail-tab">
                Activity
            </a>

        </div>

    </div>

    <!-- Employee Information -->
    <div class="container-fluid px-3 px-md-4 py-4">

        <!-- Basic Information -->
        <section class="employee-info-section mb-5">

            <h4 class="fw-semibold mb-4">
                Basic Information
            </h4>

            <div class="row g-4">

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Full Name</div>
                    <div class="detail-value">Rajesh Sharma</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Employee ID</div>
                    <div class="detail-value">EMP-0001</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Date of Birth</div>
                    <div class="detail-value">15 Aug 1990</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Gender</div>
                    <div class="detail-value">Male</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Blood Group</div>
                    <div class="detail-value">O+</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Marital Status</div>
                    <div class="detail-value">Married</div>
                </div>

            </div>

        </section>

        <!-- Employment Information -->
        <section class="employee-info-section mb-5">

            <h4 class="fw-semibold mb-4">
                Employment Information
            </h4>

            <div class="row g-4">

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Department</div>
                    <div class="detail-value">Engineering</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Designation</div>
                    <div class="detail-value">Project Manager</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Employment Type</div>
                    <div class="detail-value">Permanent</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Joining Date</div>
                    <div class="detail-value">15 Jan 2024</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Reporting Manager</div>
                    <div class="detail-value">Amit Kumar</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Work Location</div>
                    <div class="detail-value">Head Office</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Total Experience</div>
                    <div class="detail-value">8 Years</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Employee Status</div>
                    <div class="detail-value">Active</div>
                </div>

            </div>

        </section>

        <!-- Contact Information -->
        <section class="employee-info-section mb-5">

            <h4 class="fw-semibold mb-4">
                Contact & Address
            </h4>

            <div class="row g-4">

                <div class="col-12 col-lg-6">
                    <div class="detail-label">Current Address</div>
                    <div class="detail-value">
                        45/A, Indore, Madhya Pradesh, India
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="detail-label">Permanent Address</div>
                    <div class="detail-value">
                        Indore, Madhya Pradesh, India
                    </div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">City</div>
                    <div class="detail-value">Indore</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">State</div>
                    <div class="detail-value">Madhya Pradesh</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">PIN Code</div>
                    <div class="detail-value">452016</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Country</div>
                    <div class="detail-value">India</div>
                </div>

            </div>

        </section>

        <!-- Education & Experience -->
        <section class="employee-info-section mb-5">

            <h4 class="fw-semibold mb-4">
                Education & Experience
            </h4>

            <div class="row g-4">

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Highest Qualification</div>
                    <div class="detail-value">B.E. (Civil)</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Specialization</div>
                    <div class="detail-value">Civil Engineering</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Total Experience</div>
                    <div class="detail-value">8 Years</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Previous Company</div>
                    <div class="detail-value">ABC Constructions</div>
                </div>

            </div>

        </section>

        <!-- Related Documents -->
        <section class="employee-info-section mb-5">

            <h4 class="fw-semibold mb-4">
                Related Documents
            </h4>

            <div class="row g-3">

                <div class="col-12 col-md-3">
                    <div class="detail-label">Resume / CV</div>
                    <a href="/" class="employee-document-link">
                        <i class="bi bi-file-earmark-pdf me-1"></i>
                        Rajesh_Resume.pdf
                    </a>
                </div>

                <div class="col-12 col-md-3">
                    <div class="detail-label">Identity Proof</div>
                    <a href="/" class="employee-document-link">
                        <i class="bi bi-file-earmark-pdf me-1"></i>
                        Identity_Proof.pdf
                    </a>
                </div>

                <div class="col-12 col-md-3">
                    <div class="detail-label">Education Certificate</div>
                    <a href="/" class="employee-document-link">
                        <i class="bi bi-file-earmark-pdf me-1"></i>
                        Education_Certificate.pdf
                    </a>
                </div>

            </div>

        </section>

        <!-- Emergency Contact -->
        <section class="employee-info-section mb-5">

            <h4 class="fw-semibold mb-4">
                Emergency Contact
            </h4>

            <div class="row g-4">

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Contact Person</div>
                    <div class="detail-value">Priya Sharma</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Relationship</div>
                    <div class="detail-value">Spouse</div>
                </div>

                <div class="col-6 col-lg-3">
                    <div class="detail-label">Contact Number</div>
                    <div class="detail-value">+91 98260 12346</div>
                </div>

            </div>

        </section>

    </div>

</div>


.employee-tabs a {
    position: relative;
    color: #6c757d;
    text-decoration: none;
    transition: color 0.2s ease;
}

.employee-tabs a::after {
    content: "";
    position: absolute;
    left: 12px;
    right: 12px;
    bottom: 3px;
    height: 2px;
    background-color: #0067b1;
    transform: scaleX(0);
    transition: transform 0.2s ease;
}

.employee-tabs a:hover {
    color: #0067b1 !important;
}

.employee-tabs a:hover::after {
    transform: scaleX(1);
}

