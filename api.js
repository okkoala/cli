const ApiDriver = require("./driver.js");

const API_HOST = "api.okkoala.com";

module.exports = class API {
    _driver = new ApiDriver({ host: API_HOST });
    
    AcceptTermsOfUse() {
        return this._driver.sendGet({
            endpoint: "/users/accept-terms-of-use",
        });
    }

    ActivateMFAInput = ["token"];
    ActivateMFA({ token }) {
        return this._driver.sendPost({
            data: { token },
            endpoint: "/users/mfa",
        });
    }

    AddCodeInput = ["id", "value", "validTo"];
    AddCode({ id, value, validTo }) {
        return this._driver.sendPost({
            data: { id, value, validTo },
            endpoint: "/codes",
        });
    }

    AddDataRecordInput = ["last_name", "first_name", "email", "type"];
    AddDataRecord({ last_name, first_name, email, type }) {
        return this._driver.sendPost({
            data: { last_name, first_name, email, type },
            endpoint: "/data",
        });
    }

    AppSettingsChangingAuditSettingsInput = ["ACCEPTING", "FIRST_PHASE", "SECOND_PHASE", "THIRD_PHASE", "SLEEP_TIME", "TESTING", "WAITING_FOR_RESULTS", "REPORT", "FINAL_TEMPLATE_ID"];
    AppSettingsChangingAuditSettings({ ACCEPTING, FIRST_PHASE, SECOND_PHASE, THIRD_PHASE, SLEEP_TIME, TESTING, WAITING_FOR_RESULTS, REPORT, FINAL_TEMPLATE_ID }) {
        return this._driver.sendPost({
            data: { ACCEPTING, FIRST_PHASE, SECOND_PHASE, THIRD_PHASE, SLEEP_TIME, TESTING, WAITING_FOR_RESULTS, REPORT, FINAL_TEMPLATE_ID },
            endpoint: "/app-settings/audit",
        });
    }

    ArchiveAuditInput = ["id_audit", "archived"];
    ArchiveAudit({ id_audit, archived }) {
        return this._driver.sendPost({
            data: { id_audit, archived },
            endpoint: "/audits/archive",
        });
    }

    AssetsServiceUploadInput = ["name", "type"];
    AssetsServiceUpload({ name, type }) {
        return this._driver.sendPost({
            data: { name, type },
            endpoint: "/assets/upload",
        });
    }

    AssignCourseToIdentityInput = ["id_identity", "id_course"];
    AssignCourseToIdentity({ id_identity, id_course }) {
        return this._driver.sendPost({
            data: { id_identity, id_course },
            endpoint: "/courses/licenses/buy",
        });
    }

    AssignEmployeeToTagInput = ["id_data", "tag", "email", "id"];
    AssignEmployeeToTag({ id_data, tag, email, id }) {
        return this._driver.sendPost({
            data: { id_data, tag, email, id },
            endpoint: ["tags", encodeURIComponent(id)].join("/"),
        });
    }

    AttachReasonToTemplateInput = ["id_template", "id_reason"];
    AttachReasonToTemplate({ id_template, id_reason }) {
        return this._driver.sendPost({
            data: { id_template, id_reason },
            endpoint: "/reasons/attach",
        });
    }

    AuditTemplatesDb() {
        return this._driver.sendGet({
            endpoint: "/templates/audit/db",
        });
    }

    AuditTemplatesFiles() {
        return this._driver.sendPost({
            endpoint: "/templates/audit/files",
        });
    }

    AuthOutlookAddinInput = ["bootstrapToken"];
    AuthOutlookAddin({ bootstrapToken }) {
        return this._driver.sendPost({
            data: { bootstrapToken },
            endpoint: "/auth/office",
        });
    }

    AzureActiveDirectorySync() {
        return this._driver.sendGet({
            endpoint: "/azure-active-directory-sync",
        });
    }

    AzureActiveDirectorySyncNow() {
        return this._driver.sendPost({
            endpoint: "/azure-active-directory-sync-now",
        });
    }

    AzureActiveDirectorySyncProfile() {
        return this._driver.sendPost({
            endpoint: "/azure-active-directory-sync",
        });
    }

    AzureLoginForTeams() {
        return this._driver.sendGet({
            endpoint: "/auth/teams",
        });
    }

    AzureLoginForWebsite() {
        return this._driver.sendGet({
            endpoint: "/auth/azure",
        });
    }

    BillingGetDownloadUrlAsModeratorInput = ["id_billing", "id"];
    BillingGetDownloadUrlAsModerator({ id_billing, id }) {
        return this._driver.sendPost({
            data: { id_billing, id },
            endpoint: "/billings/download/mod",
        });
    }

    BillingGetDownloadUrlAsUserInput = ["id"];
    BillingGetDownloadUrlAsUser({ id }) {
        return this._driver.sendPost({
            data: { id },
            endpoint: "/billings/download",
        });
    }

    BillingGetUploadUrlInput = ["key", "id_billing", "extension", "contentType"];
    BillingGetUploadUrl({ key, id_billing, extension, contentType }) {
        return this._driver.sendPost({
            data: { key, id_billing, extension, contentType },
            endpoint: "/billings/upload",
        });
    }

    CanChangeDealStateInput = ["state", "target_state"];
    CanChangeDealState({ state, target_state }) {
        return this._driver.sendPost({
            data: { state, target_state },
            endpoint: "/deals/change-account-type",
        });
    }

    ChangeAccountTypeInput = ["id_user", "user_role", "id_identity"];
    ChangeAccountType({ id_user, user_role, id_identity }) {
        return this._driver.sendPut({
            data: { id_user, user_role, id_identity },
            endpoint: "/users/account-mode",
        });
    }

    ChangeBillingPayStatusInput = ["payed", "id_billing", "id"];
    ChangeBillingPayStatus({ payed, id_billing, id }) {
        return this._driver.sendPut({
            data: { payed, id_billing, id },
            endpoint: ["billings", "users", encodeURIComponent(id), "payed"].join("/"),
        });
    }

    CheckCodeInput = ["id"];
    CheckCode({ id }) {
        return this._driver.sendGet({
            endpoint: ["codes", encodeURIComponent(id)].join("/"),
        });
    }

    CompanyUsersReportA() {
        return this._driver.sendGet({
            endpoint: "/company/users/report/a",
        });
    }

    CompanyUsersReportB() {
        return this._driver.sendGet({
            endpoint: "/company/users/report/b",
        });
    }

    CompleteTaskInput = ["id_mission", "id_template", "answer"];
    CompleteTask({ id_mission, id_template, answer }) {
        return this._driver.sendPost({
            data: { id_mission, id_template, answer },
            endpoint: "/missions/complete",
        });
    }

    ConsumeOrderInput = ["id", "consumed"];
    ConsumeOrder({ id, consumed }) {
        return this._driver.sendPut({
            data: { id, consumed },
            endpoint: "/orders",
        });
    }

    ConsumeQuestionInput = ["id", "consumed"];
    ConsumeQuestion({ id, consumed }) {
        return this._driver.sendPut({
            data: { id, consumed },
            endpoint: "/questions",
        });
    }

    ContactInput = ["email", "ms_teams", "question", "rodo", "token"];
    Contact({ email, ms_teams, question, rodo, token }) {
        return this._driver.sendPost({
            data: { email, ms_teams, question, rodo, token },
            endpoint: "/contact",
        });
    }

    CountEmployeesOfCompany() {
        return this._driver.sendGet({
            endpoint: "/data/count-by-company",
        });
    }

    CountTempleteQueuesInput = ["payed", "id_billing"];
    CountTempleteQueues({ payed, id_billing }) {
        return this._driver.sendGet({
            endpoint: "/template-queue/count",
        });
    }

    CourseByIdInput = ["id"];
    CourseById({ id }) {
        return this._driver.sendGet({
            endpoint: ["courses", encodeURIComponent(id)].join("/"),
        });
    }

    CoursesAvailableForCompanyInput = ["id"];
    CoursesAvailableForCompany({ id }) {
        return this._driver.sendGet({
            endpoint: ["courses", "available", encodeURIComponent(id)].join("/"),
        });
    }

    CreateAgreementInput = ["id", "value", "agreement_date", "acceptance_date"];
    CreateAgreement({ id, value, agreement_date, acceptance_date }) {
        return this._driver.sendPost({
            data: { id, value, agreement_date, acceptance_date },
            endpoint: "/agreements",
        });
    }

    CreateAudit() {
        return this._driver.sendPost({
            endpoint: "/audits",
        });
    }

    CreateCertInput = ["id_data", "first_name", "last_name", "email"];
    CreateCert({ id_data, first_name, last_name, email }) {
        return this._driver.sendPost({
            data: { id_data, first_name, last_name, email },
            endpoint: "/me/certs",
        });
    }

    CreateCompanyAsModeratorInput = ["name", "type"];
    CreateCompanyAsModerator({ name, type }) {
        return this._driver.sendPost({
            data: { name, type },
            endpoint: "/company",
        });
    }

    CreateCountryInput = ["isocode"];
    CreateCountry({ isocode }) {
        return this._driver.sendPost({
            data: { isocode },
            endpoint: "/countries",
        });
    }

    CreateCourseInput = ["isocode"];
    CreateCourse({ isocode }) {
        return this._driver.sendPost({
            data: { isocode },
            endpoint: "/courses",
        });
    }

    CreateDeal() {
        return this._driver.sendPost({
            endpoint: "/partner/deal",
        });
    }

    CreateDealPDF() {
        return this._driver.sendGet({
            endpoint: "/deals/pdf",
        });
    }

    CreateFaqInput = ["query", "answer", "lang"];
    CreateFaq({ query, answer, lang }) {
        return this._driver.sendPost({
            data: { query, answer, lang },
            endpoint: "/faq",
        });
    }

    CreateFlowInput = ["name", "name_pl", "description", "description_pl"];
    CreateFlow({ name, name_pl, description, description_pl }) {
        return this._driver.sendPost({
            data: { name, name_pl, description, description_pl },
            endpoint: "/flow",
        });
    }

    CreateFlowItem() {
        return this._driver.sendPost({
            endpoint: "/flow/items",
        });
    }

    CreateLeadInput = ["email", "checked"];
    CreateLead({ email, checked }) {
        return this._driver.sendPost({
            data: { email, checked },
            endpoint: "/leads",
        });
    }

    CreateMFAInput = ["query", "answer"];
    CreateMFA({ query, answer }) {
        return this._driver.sendGet({
            endpoint: "/users/mfa",
        });
    }

    CreateMissionAsModeratorInput = ["id_category", "id_template", "id_template_pl", "title", "title_pl", "value", "type", "answer"];
    CreateMissionAsModerator({ id_category, id_template, id_template_pl, title, title_pl, value, type, answer }) {
        return this._driver.sendPost({
            data: { id_category, id_template, id_template_pl, title, title_pl, value, type, answer },
            endpoint: "/missions",
        });
    }

    CreateMissionCategoryAsModeratorInput = ["name", "name_pl"];
    CreateMissionCategoryAsModerator({ name, name_pl }) {
        return this._driver.sendPost({
            data: { name, name_pl },
            endpoint: "/mission-categories",
        });
    }

    CreateOrderInput = ["name", "address", "nip", "regon", "who", "email", "phone_number", "token"];
    CreateOrder({ name, address, nip, regon, who, email, phone_number, token }) {
        return this._driver.sendPost({
            data: { name, address, nip, regon, who, email, phone_number, token },
            endpoint: "/orders",
        });
    }

    CreatePartnershipInput = ["email", "id_partner", "user_role"];
    CreatePartnership({ email, id_partner, user_role }) {
        return this._driver.sendPost({
            data: { email, id_partner, user_role },
            endpoint: "/partner/partnership",
        });
    }

    CreatePost() {
        return this._driver.sendPost({
            endpoint: "/posts",
        });
    }

    CreatePostComment() {
        return this._driver.sendPost({
            endpoint: "/posts-comments",
        });
    }

    CreatePostPageInput = ["name_pl", "name_en"];
    CreatePostPage({ name_pl, name_en }) {
        return this._driver.sendPost({
            data: { name_pl, name_en },
            endpoint: "/post-pages",
        });
    }

    CreatePostReactions() {
        return this._driver.sendPost({
            endpoint: "/posts-reactions",
        });
    }

    CreatePublicTemplateInput = ["id_category", "name", "sender_name", "based_on", "training_only", "lang", "story", "featured", "mjmlCode", "htmlCode", "id_identity", "is_public", "id_mail_transport", "trusted"];
    CreatePublicTemplate({ id_category, name, sender_name, based_on, training_only, lang, story, featured, mjmlCode, htmlCode, id_identity, is_public, id_mail_transport, trusted }) {
        return this._driver.sendPost({
            data: { id_category, name, sender_name, based_on, training_only, lang, story, featured, mjmlCode, htmlCode, id_identity, is_public, id_mail_transport, trusted },
            endpoint: "/templates/public",
        });
    }

    CreateQuestion() {
        return this._driver.sendPost({
            endpoint: "/questions",
        });
    }

    CreateQueueInput = ["query", "answer"];
    CreateQueue({ query, answer }) {
        return this._driver.sendPost({
            data: { query, answer },
            endpoint: "/queues",
        });
    }

    CreateQueueOnPerformInput = ["id", "id_template"];
    CreateQueueOnPerform({ id, id_template }) {
        return this._driver.sendPost({
            data: { id, id_template },
            endpoint: "/queues/perform",
        });
    }

    CreateReactionInput = ["name", "value"];
    CreateReaction({ name, value }) {
        return this._driver.sendPost({
            data: { name, value },
            endpoint: "/reactions",
        });
    }

    CreateReasonInput = ["message", "message_pl"];
    CreateReason({ message, message_pl }) {
        return this._driver.sendPost({
            data: { message, message_pl },
            endpoint: "/reasons",
        });
    }

    CreateReportInput = ["name", "count", "avg_final_question", "avg_quiz_score", "minimum_started_at", "id"];
    CreateReport({ name, count, avg_final_question, avg_quiz_score, minimum_started_at, id }) {
        return this._driver.sendPost({
            data: { name, count, avg_final_question, avg_quiz_score, minimum_started_at, id },
            endpoint: ["audits", encodeURIComponent(id), "report"].join("/"),
        });
    }

    CreateTagInput = ["name"];
    CreateTag({ name }) {
        return this._driver.sendPost({
            data: { name },
            endpoint: "/tags",
        });
    }

    CreateTemplate() {
        return this._driver.sendPost({
            endpoint: "/templates",
        });
    }

    CreateTemplateCategoryInput = ["name"];
    CreateTemplateCategory({ name }) {
        return this._driver.sendPost({
            data: { name },
            endpoint: "/template-category",
        });
    }

    CreateTrainingInput = ["id_audit", "id_data"];
    CreateTraining({ id_audit, id_data }) {
        return this._driver.sendPost({
            data: { id_audit, id_data },
            endpoint: "/trainings",
        });
    }

    CreateTransport() {
        return this._driver.sendPost({
            endpoint: "/transports",
        });
    }

    CreateUserInput = ["email", "source", "lang", "id_company", "first_name", "last_name"];
    CreateUser({ email, source, lang, id_company, first_name, last_name }) {
        return this._driver.sendPost({
            data: { email, source, lang, id_company, first_name, last_name },
            endpoint: "/users",
        });
    }

    CreateUserBillingInput = ["billingName", "dateValue", "id_aggrement", "id", "email", "payed", "id_identity"];
    CreateUserBilling({ billingName, dateValue, id_aggrement, id, email, payed, id_identity }) {
        return this._driver.sendPost({
            data: { billingName, dateValue, id_aggrement, id, email, payed, id_identity },
            endpoint: ["billings", "users", encodeURIComponent(email)].join("/"),
        });
    }

    DeleteAzureActiveDirectoryProfileInput = ["id_sync_profiles"];
    DeleteAzureActiveDirectoryProfile({ id_sync_profiles }) {
        return this._driver.sendDelete({
            data: { id_sync_profiles },
            endpoint: "/azure-active-directory-sync",
        });
    }

    DeleteComplainInput = ["isocode", "id"];
    DeleteComplain({ isocode, id }) {
        return this._driver.sendDelete({
            data: { isocode, id },
            endpoint: ["trainings", "complain", encodeURIComponent(id)].join("/"),
        });
    }

    DeleteCountryInput = ["isocode"];
    DeleteCountry({ isocode }) {
        return this._driver.sendDelete({
            data: { isocode },
            endpoint: "/countries",
        });
    }

    DeleteDetailRecordInput = ["email", "key"];
    DeleteDetailRecord({ email, key }) {
        return this._driver.sendDelete({
            data: { email, key },
            endpoint: "/data/details",
        });
    }

    DeleteFaqInput = ["query", "answer"];
    DeleteFaq({ query, answer }) {
        return this._driver.sendPost({
            data: { query, answer },
            endpoint: "/faq",
        });
    }

    DeleteMailTransport() {
        return this._driver.sendDelete({
            endpoint: "/transports",
        });
    }

    DeleteMineDomain() {
        return this._driver.sendDelete({
            endpoint: "/domain-registration",
        });
    }

    DeleteMissionCategoryAsModeratorInput = ["id"];
    DeleteMissionCategoryAsModerator({ id }) {
        return this._driver.sendDelete({
            data: { id },
            endpoint: "/mission-categories",
        });
    }

    DeletePartnershipInput = ["id_partnership", "id_partner"];
    DeletePartnership({ id_partnership, id_partner }) {
        return this._driver.sendDelete({
            data: { id_partnership, id_partner },
            endpoint: "/partner/partnership",
        });
    }

    DeletePost() {
        return this._driver.sendDelete({
            endpoint: "/posts",
        });
    }

    DeleteReasonInput = ["id"];
    DeleteReason({ id }) {
        return this._driver.sendDelete({
            data: { id },
            endpoint: "/orders",
        });
    }

    DeleteTagInput = ["id"];
    DeleteTag({ id }) {
        return this._driver.sendDelete({
            data: { id },
            endpoint: "/tags",
        });
    }

    DeleteTemplateInput = ["id"];
    DeleteTemplate({ id }) {
        return this._driver.sendDelete({
            data: { id },
            endpoint: "/templates",
        });
    }

    DeleteTemplateCategoryInput = ["isocode"];
    DeleteTemplateCategory({ isocode }) {
        return this._driver.sendDelete({
            data: { isocode },
            endpoint: "/template-category",
        });
    }

    DeleteTrainingInput = ["id_audit", "id_data"];
    DeleteTraining({ id_audit, id_data }) {
        return this._driver.sendDelete({
            data: { id_audit, id_data },
            endpoint: "/trainings",
        });
    }

    DetachCourseFromIdentityInput = ["id_identity", "id_course"];
    DetachCourseFromIdentity({ id_identity, id_course }) {
        return this._driver.sendDelete({
            data: { id_identity, id_course },
            endpoint: "/courses/licenses/return",
        });
    }

    DetachFromTemplateInput = ["id_template", "id_reason"];
    DetachFromTemplate({ id_template, id_reason }) {
        return this._driver.sendDelete({
            data: { id_template, id_reason },
            endpoint: "/reasons/attach",
        });
    }

    DownloadDealLetterInput = ["id"];
    DownloadDealLetter({ id }) {
        return this._driver.sendGet({
            endpoint: ["deals", encodeURIComponent(id), "pdf"].join("/"),
        });
    }

    DownloadHtmlContentInput = ["id"];
    DownloadHtmlContent({ id }) {
        return this._driver.sendGet({
            endpoint: ["templates", encodeURIComponent(id), "html"].join("/"),
        });
    }

    DownloadMjmlContentInput = ["id"];
    DownloadMjmlContent({ id }) {
        return this._driver.sendGet({
            endpoint: ["templates", encodeURIComponent(id), "mjml"].join("/"),
        });
    }

    DropEmailFromSandboxInput = ["id"];
    DropEmailFromSandbox({ id }) {
        return this._driver.sendDelete({
            data: { id },
            endpoint: "/sandbox/download-emails",
        });
    }

    EmpCoverageReport() {
        return this._driver.sendGet({
            endpoint: "/reports/emp-coverage",
        });
    }

    EmployeesAssignedToTagInput = ["id"];
    EmployeesAssignedToTag({ id }) {
        return this._driver.sendGet({
            endpoint: ["tags", encodeURIComponent(id)].join("/"),
        });
    }

    EnableDevSupport() {
        return this._driver.sendPut({
            endpoint: "/users/me/developer",
        });
    }

    EndTrainingInput = ["id_data", "first_name", "last_name", "email"];
    EndTraining({ id_data, first_name, last_name, email }) {
        return this._driver.sendPost({
            data: { id_data, first_name, last_name, email },
            endpoint: "/trainings/end-training",
        });
    }

    EndTutorial() {
        return this._driver.sendPost({
            endpoint: "/trainings/tutorial/end",
        });
    }

    ExternalUserInput = ["id_identity"];
    ExternalUser({ id_identity }) {
        return this._driver.sendPost({
            data: { id_identity },
            endpoint: "/auth/external-user",
        });
    }

    GetAuditAgreementAsModeratorInput = ["user", "id"];
    GetAuditAgreementAsModerator({ user, id }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(user), encodeURIComponent(id), "agreement"].join("/"),
        });
    }

    GetAuditAgreementsInput = ["id"];
    GetAuditAgreements({ id }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(id), "agreement"].join("/"),
        });
    }

    GetAuditRecipeInput = ["id"];
    GetAuditRecipe({ id }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(id), "recipe"].join("/"),
        });
    }

    GetBillingsByIdInput = ["id"];
    GetBillingsById({ id }) {
        return this._driver.sendGet({
            endpoint: ["billings", "users", encodeURIComponent(id)].join("/"),
        });
    }

    GetBucketConfiguration() {
        return this._driver.sendGet({
            endpoint: "/system/buckets",
        });
    }

    GetCertInput = ["id_data", "first_name", "last_name", "email"];
    GetCert({ id_data, first_name, last_name, email }) {
        return this._driver.sendGet({
            endpoint: "/certs",
        });
    }

    GetChangesOfDealInput = ["id_data", "first_name", "last_name", "email", "id"];
    GetChangesOfDeal({ id_data, first_name, last_name, email, id }) {
        return this._driver.sendGet({
            endpoint: ["partner", "deal-changes", encodeURIComponent(id)].join("/"),
        });
    }

    GetCompanyName() {
        return this._driver.sendPost({
            endpoint: "/trainings/company",
        });
    }

    GetCustomUserUsedTrainings() {
        return this._driver.sendPost({
            endpoint: "/users/trainings-count-admin",
        });
    }

    GetDataPoolOfMyCompany() {
        return this._driver.sendGet({
            endpoint: "/company/data-pool",
        });
    }

    GetDealByIdInput = ["id"];
    GetDealById({ id }) {
        return this._driver.sendGet({
            endpoint: ["deals", encodeURIComponent(id), "data"].join("/"),
        });
    }

    GetDeveloperSupport() {
        return this._driver.sendGet({
            endpoint: "/users/me/developer",
        });
    }

    GetEmployeeData() {
        return this._driver.sendPost({
            endpoint: "/data/about-me",
        });
    }

    GetGlobalPricing() {
        return this._driver.sendGet({
            endpoint: "/pricing/global",
        });
    }

    GetIdentityForTraining() {
        return this._driver.sendGet({
            endpoint: "/trainings/start",
        });
    }

    GetInfoAboutTemplateInput = ["id"];
    GetInfoAboutTemplate({ id }) {
        return this._driver.sendGet({
            endpoint: ["templates", encodeURIComponent(id), "info"].join("/"),
        });
    }

    GetInfoAsAnEmployeeInput = ["id"];
    GetInfoAsAnEmployee({ id }) {
        return this._driver.sendPost({
            data: { id },
            endpoint: "/templates/info-for-training",
        });
    }

    GetInformationAboutCompany() {
        return this._driver.sendPost({
            endpoint: "/company/info",
        });
    }

    GetMaxPoints() {
        return this._driver.sendGet({
            endpoint: "/missions/max-points",
        });
    }

    GetMyCertInput = ["id_data", "first_name", "last_name", "email"];
    GetMyCert({ id_data, first_name, last_name, email }) {
        return this._driver.sendGet({
            endpoint: "/me/certs",
        });
    }

    GetMySelfInfo() {
        return this._driver.sendGet({
            endpoint: "/users/me",
        });
    }

    GetMyUsedTrainings() {
        return this._driver.sendPost({
            endpoint: "/users/trainings-count",
        });
    }

    GetPostInput = ["id"];
    GetPost({ id }) {
        return this._driver.sendGet({
            endpoint: ["posts", encodeURIComponent(id)].join("/"),
        });
    }

    GetPriceForTraining() {
        return this._driver.sendGet({
            endpoint: "/trainings/price",
        });
    }

    GetPublicTemplateByIdInput = ["id"];
    GetPublicTemplateById({ id }) {
        return this._driver.sendGet({
            endpoint: ["templates", "public", encodeURIComponent(id)].join("/"),
        });
    }

    GetPublicUploadUrlInput = ["id"];
    GetPublicUploadUrl({ id }) {
        return this._driver.sendPost({
            data: { id },
            endpoint: "/templates/public-upload",
        });
    }

    GetReportInput = ["id_audit"];
    GetReport({ id_audit }) {
        return this._driver.sendPost({
            data: { id_audit },
            endpoint: "/audits/report/download",
        });
    }

    GetSystemUptime() {
        return this._driver.sendGet({
            endpoint: "/system/uptime",
        });
    }

    GetTermsOfUseDate() {
        return this._driver.sendGet({
            endpoint: "/app-settings/terms-of-use",
        });
    }

    GetTrainingInfo() {
        return this._driver.sendGet({
            endpoint: "/trainings/info",
        });
    }

    GetTransportByIdInput = ["id"];
    GetTransportById({ id }) {
        return this._driver.sendGet({
            endpoint: ["transports", encodeURIComponent(id), "info"].join("/"),
        });
    }

    GetTurnoverOfMyCompany() {
        return this._driver.sendGet({
            endpoint: "/company/turnover",
        });
    }

    GetUserBillings() {
        return this._driver.sendGet({
            endpoint: "/billings",
        });
    }

    GetUserByIdInput = ["id"];
    GetUserById({ id }) {
        return this._driver.sendGet({
            endpoint: ["data", "id", encodeURIComponent(id)].join("/"),
        });
    }

    GetUserInfoInput = ["id"];
    GetUserInfo({ id }) {
        return this._driver.sendGet({
            endpoint: ["users", "info", encodeURIComponent(id)].join("/"),
        });
    }

    GetUsersEmployeesDataInput = ["id"];
    GetUsersEmployeesData({ id }) {
        return this._driver.sendGet({
            endpoint: ["users", "data", encodeURIComponent(id)].join("/"),
        });
    }

    GetUsersOfCompany() {
        return this._driver.sendPost({
            endpoint: "/company/users",
        });
    }

    GetWorkspaceSettings() {
        return this._driver.sendGet({
            endpoint: "/users/workspace",
        });
    }

    IWasHere() {
        return this._driver.sendGet({
            endpoint: "/trainings/i-was-here",
        });
    }

    ImageProxy() {
        return this._driver.sendGet({
            endpoint: "/proxy/image-proxy",
        });
    }

    InfoAboutMyCourseInput = ["id_data", "first_name", "last_name", "email", "id"];
    InfoAboutMyCourse({ id_data, first_name, last_name, email, id }) {
        return this._driver.sendGet({
            endpoint: ["me", "courses", encodeURIComponent(id)].join("/"),
        });
    }

    InsertDetailRecordInput = ["email", "key", "value"];
    InsertDetailRecord({ email, key, value }) {
        return this._driver.sendPost({
            data: { email, key, value },
            endpoint: "/data/details",
        });
    }

    ListAllPublicTemplates() {
        return this._driver.sendGet({
            endpoint: "/templates/public/all",
        });
    }

    ListAllPublicTemplatesAsModerator() {
        return this._driver.sendGet({
            endpoint: "/templates/public/all-admin",
        });
    }

    ListAuditEmployeesInput = ["id"];
    ListAuditEmployees({ id }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(id), "employees"].join("/"),
        });
    }

    ListAuditEmployeesAsModeratorInput = ["user", "id"];
    ListAuditEmployeesAsModerator({ user, id }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(user), encodeURIComponent(id), "employees"].join("/"),
        });
    }

    ListAuditQueuesInput = ["id"];
    ListAuditQueues({ id }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(id), "queues"].join("/"),
        });
    }

    ListAuditQueuesAsModeratorInput = ["user", "id"];
    ListAuditQueuesAsModerator({ user, id }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(user), encodeURIComponent(id), "queues"].join("/"),
        });
    }

    ListAudits() {
        return this._driver.sendGet({
            endpoint: "/audits",
        });
    }

    ListAuditsAsModeratorInput = ["owner"];
    ListAuditsAsModerator({ owner }) {
        return this._driver.sendGet({
            endpoint: ["audits", "users", encodeURIComponent(owner)].join("/"),
        });
    }

    ListAuditsInProgress() {
        return this._driver.sendGet({
            endpoint: "/audits/in-progress",
        });
    }

    ListAvailableAudits() {
        return this._driver.sendGet({
            endpoint: "/audits/available",
        });
    }

    ListCodes() {
        return this._driver.sendGet({
            endpoint: "/codes",
        });
    }

    ListCompanies() {
        return this._driver.sendGet({
            endpoint: "/companies",
        });
    }

    ListCountry() {
        return this._driver.sendGet({
            endpoint: "/countries",
        });
    }

    ListCourses() {
        return this._driver.sendGet({
            endpoint: "/courses",
        });
    }

    ListCurrentAudits() {
        return this._driver.sendGet({
            endpoint: "/audits/current",
        });
    }

    ListCustomUserAgreementsInput = ["id"];
    ListCustomUserAgreements({ id }) {
        return this._driver.sendGet({
            endpoint: ["agreements", encodeURIComponent(id)].join("/"),
        });
    }

    ListDeals() {
        return this._driver.sendGet({
            endpoint: "/partner/deals",
        });
    }

    ListEmailsFromSandboxInput = ["to"];
    ListEmailsFromSandbox({ to }) {
        return this._driver.sendPost({
            data: { to },
            endpoint: "/sandbox/download-emails",
        });
    }

    ListFaq() {
        return this._driver.sendGet({
            endpoint: "/faq",
        });
    }

    ListFlowsModerator() {
        return this._driver.sendGet({
            endpoint: "/flows",
        });
    }

    ListIdentitiesToLoginIn() {
        return this._driver.sendGet({
            endpoint: "/identities/switch",
        });
    }

    ListLoggedUserAgreements() {
        return this._driver.sendGet({
            endpoint: "/agreements",
        });
    }

    ListMineDomains() {
        return this._driver.sendGet({
            endpoint: "/domain-registration",
        });
    }

    ListMineTemplates() {
        return this._driver.sendGet({
            endpoint: "/templates",
        });
    }

    ListMineTransports() {
        return this._driver.sendGet({
            endpoint: "/transports/mine",
        });
    }

    ListMyCompanyUsers() {
        return this._driver.sendGet({
            endpoint: "/company/users",
        });
    }

    ListMyPartnerships() {
        return this._driver.sendGet({
            endpoint: "/users/me/partnerships",
        });
    }

    ListNoTrustTemplates() {
        return this._driver.sendGet({
            endpoint: "/templates/no-trust",
        });
    }

    ListOneAuditAsModeratorInput = ["owner"];
    ListOneAuditAsModerator({ owner }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(owner)].join("/"),
        });
    }

    ListOrders() {
        return this._driver.sendGet({
            endpoint: "/orders",
        });
    }

    ListPartnershipsInput = ["id"];
    ListPartnerships({ id }) {
        return this._driver.sendGet({
            endpoint: ["partner", encodeURIComponent(id), "partnership"].join("/"),
        });
    }

    ListPersonalTrainings() {
        return this._driver.sendGet({
            endpoint: "/users/me/trainings",
        });
    }

    ListPostPages() {
        return this._driver.sendGet({
            endpoint: "/post-pages",
        });
    }

    ListPosts() {
        return this._driver.sendGet({
            endpoint: "/posts",
        });
    }

    ListPostsCommentsInput = ["id_post"];
    ListPostsComments({ id_post }) {
        return this._driver.sendGet({
            endpoint: ["posts", encodeURIComponent(id_post), "comments"].join("/"),
        });
    }

    ListPublicFlows() {
        return this._driver.sendGet({
            endpoint: "/flows/public",
        });
    }

    ListPublicTemplateCategoryByCategoryInput = ["id"];
    ListPublicTemplateCategoryByCategory({ id }) {
        return this._driver.sendGet({
            endpoint: ["template-category", encodeURIComponent(id), "public"].join("/"),
        });
    }

    ListPublicTemplates() {
        return this._driver.sendGet({
            endpoint: "/templates/public",
        });
    }

    ListPublicTransports() {
        return this._driver.sendGet({
            endpoint: "/transports",
        });
    }

    ListQuestions() {
        return this._driver.sendGet({
            endpoint: "/questions",
        });
    }

    ListReactionsOfEmployeeInput = ["id"];
    ListReactionsOfEmployee({ id }) {
        return this._driver.sendGet({
            endpoint: ["data", encodeURIComponent(id), "reactions"].join("/"),
        });
    }

    ListReasons() {
        return this._driver.sendGet({
            endpoint: "/reasons",
        });
    }

    ListReasonsAttachingInput = ["id"];
    ListReasonsAttaching({ id }) {
        return this._driver.sendGet({
            endpoint: ["reasons", encodeURIComponent(id)].join("/"),
        });
    }

    ListSyncProfiles() {
        return this._driver.sendGet({
            endpoint: "/sync-profiles",
        });
    }

    ListTemplateCategory() {
        return this._driver.sendGet({
            endpoint: "/template-category",
        });
    }

    ListTemplateMJMLInput = ["id"];
    ListTemplateMJML({ id }) {
        return this._driver.sendGet({
            endpoint: ["templates", encodeURIComponent(id), "mjml"].join("/"),
        });
    }

    ListTemplateQueuesInput = ["payed", "id_billing"];
    ListTemplateQueues({ payed, id_billing }) {
        return this._driver.sendGet({
            endpoint: "/template-queue",
        });
    }

    ListTemplatesByUserInput = ["id"];
    ListTemplatesByUser({ id }) {
        return this._driver.sendGet({
            endpoint: ["templates", "users", encodeURIComponent(id)].join("/"),
        });
    }

    ListTrainingsByAuditInput = ["id"];
    ListTrainingsByAudit({ id }) {
        return this._driver.sendGet({
            endpoint: ["trainings", "by-audit", encodeURIComponent(id)].join("/"),
        });
    }

    ListTrainingsHavingEmployee() {
        return this._driver.sendPost({
            endpoint: "/trainings/list-by-employee",
        });
    }

    ListTrainingsOfCompany() {
        return this._driver.sendGet({
            endpoint: "/trainings",
        });
    }

    ListUsers() {
        return this._driver.sendGet({
            endpoint: "/users",
        });
    }

    Login() {
        return this._driver.sendPost({
            endpoint: "/users/login",
        });
    }

    LoginAsEmployeeViaAccessToken() {
        return this._driver.sendPost({
            endpoint: "/trainings/login-token",
        });
    }

    LoginForTraining() {
        return this._driver.sendPost({
            endpoint: "/trainings/login",
        });
    }

    MakeComplainAboutTraining() {
        return this._driver.sendPost({
            endpoint: "/trainings/complain",
        });
    }

    Microsoft365LoginParams() {
        return this._driver.sendGet({
            endpoint: "/auth/azure/params",
        });
    }

    MicrosoftMarketplaceWebhook() {
        return this._driver.sendPost({
            endpoint: "/webhooks/microsoft-marketplace",
        });
    }

    ModifyDeal() {
        return this._driver.sendPut({
            endpoint: "/partner/deals",
        });
    }

    MyCoursesInput = ["id_data", "first_name", "last_name", "email"];
    MyCourses({ id_data, first_name, last_name, email }) {
        return this._driver.sendGet({
            endpoint: "/me/courses",
        });
    }

    MyPricing() {
        return this._driver.sendGet({
            endpoint: "/users/me/pricing",
        });
    }

    MyTrainings() {
        return this._driver.sendGet({
            endpoint: "/me/trainings",
        });
    }

    OverrideUserInfo() {
        return this._driver.sendPost({
            endpoint: "/identities/info",
        });
    }

    PostsInMyCourseInput = ["id_data", "first_name", "last_name", "email", "id"];
    PostsInMyCourse({ id_data, first_name, last_name, email, id }) {
        return this._driver.sendGet({
            endpoint: ["me", "courses", encodeURIComponent(id), "posts"].join("/"),
        });
    }

    ReadAuditAsModeratorInput = ["user", "id"];
    ReadAuditAsModerator({ user, id }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(user), encodeURIComponent(id), "info"].join("/"),
        });
    }

    ReadAuditSchemaInput = ["id"];
    ReadAuditSchema({ id }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(id), "flow"].join("/"),
        });
    }

    ReadAuditWelcomeSettings() {
        return this._driver.sendGet({
            endpoint: "/audits/welcome-settings",
        });
    }

    ReadEmployeesTags() {
        return this._driver.sendGet({
            endpoint: "/tags/of-employees",
        });
    }

    ReadIfUserNeedsTutorial() {
        return this._driver.sendPost({
            endpoint: "/trainings/tutorial",
        });
    }

    ReadMissionForTrainingInput = ["id_mission"];
    ReadMissionForTraining({ id_mission }) {
        return this._driver.sendPost({
            data: { id_mission },
            endpoint: "/missions/for-report",
        });
    }

    ReadMissionStatusForTrainingInput = ["id_mission"];
    ReadMissionStatusForTraining({ id_mission }) {
        return this._driver.sendPost({
            data: { id_mission },
            endpoint: "/missions/status",
        });
    }

    ReadMissionsAsModerator() {
        return this._driver.sendGet({
            endpoint: "/missions",
        });
    }

    ReadMissionsCategoriesAsModerator() {
        return this._driver.sendGet({
            endpoint: "/mission-categories",
        });
    }

    ReadMissionsCategoriesAsUser() {
        return this._driver.sendGet({
            endpoint: "/mission-categories/public",
        });
    }

    ReadMissionsForUserTrainingInput = ["id_category"];
    ReadMissionsForUserTraining({ id_category }) {
        return this._driver.sendPost({
            data: { id_category },
            endpoint: "/missions/employee",
        });
    }

    ReadMyComplains() {
        return this._driver.sendGet({
            endpoint: "/trainings/complain",
        });
    }

    ReadMyData() {
        return this._driver.sendGet({
            endpoint: "/data",
        });
    }

    ReadMyTags() {
        return this._driver.sendGet({
            endpoint: "/tags",
        });
    }

    ReadOneAuditInput = ["id"];
    ReadOneAudit({ id }) {
        return this._driver.sendGet({
            endpoint: ["audits", encodeURIComponent(id), "info"].join("/"),
        });
    }

    ReadRecordByEmailInput = ["email"];
    ReadRecordByEmail({ email }) {
        return this._driver.sendGet({
            endpoint: ["data", encodeURIComponent(email)].join("/"),
        });
    }

    ReadTrainingPointsOfEmployee() {
        return this._driver.sendPost({
            endpoint: "/trainings/my-points",
        });
    }

    ReadUserComplainsInput = ["id"];
    ReadUserComplains({ id }) {
        return this._driver.sendGet({
            endpoint: ["trainings", "complain", encodeURIComponent(id)].join("/"),
        });
    }

    RegisterClickOnTrainingEnter() {
        return this._driver.sendPost({
            endpoint: "/trainings/enter",
        });
    }

    RegisterDomain() {
        return this._driver.sendPost({
            endpoint: "/domain-registration",
        });
    }

    RemoveCode() {
        return this._driver.sendDelete({
            endpoint: "/codes",
        });
    }

    RemovePostCommentInput = ["id_post", "id_posts_comment"];
    RemovePostComment({ id_post, id_posts_comment }) {
        return this._driver.sendDelete({
            data: { id_post, id_posts_comment },
            endpoint: "/posts-comments",
        });
    }

    RemovePostReactionInput = ["id_post"];
    RemovePostReaction({ id_post }) {
        return this._driver.sendDelete({
            data: { id_post },
            endpoint: "/posts-reactions",
        });
    }

    RemoveRecordInput = ["email"];
    RemoveRecord({ email }) {
        return this._driver.sendDelete({
            data: { email },
            endpoint: "/data",
        });
    }

    ReportSpeakInput = ["id", "priority"];
    ReportSpeak({ id, priority }) {
        return this._driver.sendGet({
            endpoint: ["reports", encodeURIComponent(id), "say-it"].join("/"),
        });
    }

    ReportTemplateQueueInput = ["id_template_queue", "password"];
    ReportTemplateQueue({ id_template_queue, password }) {
        return this._driver.sendPost({
            data: { id_template_queue, password },
            endpoint: "/template-queue/report",
        });
    }

    RescheduleTemplateQueueSendingInput = ["start_time", "end_time", "id"];
    RescheduleTemplateQueueSending({ start_time, end_time, id }) {
        return this._driver.sendPut({
            data: { start_time, end_time, id },
            endpoint: "/template-queue/reschedule",
        });
    }

    ResetPassword() {
        return this._driver.sendPost({
            endpoint: "/users/reset",
        });
    }

    ResetPasswordRequest() {
        return this._driver.sendPut({
            endpoint: "/users/reset",
        });
    }

    RestoreDataInput = ["id_data"];
    RestoreData({ id_data }) {
        return this._driver.sendPut({
            data: { id_data },
            endpoint: "/data/restore",
        });
    }

    RunAudit() {
        return this._driver.sendPost({
            endpoint: "/audits/run",
        });
    }

    SendingSchedulerByCompany() {
        return this._driver.sendGet({
            endpoint: "/scheduler",
        });
    }

    SetGlobalPricing() {
        return this._driver.sendPut({
            endpoint: "/pricing/global",
        });
    }

    SetMyLanguage() {
        return this._driver.sendPut({
            endpoint: "/users/me/language",
        });
    }

    SetNewPassword() {
        return this._driver.sendPost({
            endpoint: "/users/new-password",
        });
    }

    SetPersonalData() {
        return this._driver.sendPut({
            endpoint: "/users/me/name",
        });
    }

    SetTrustOfTemplate() {
        return this._driver.sendPut({
            endpoint: "/templates/trust",
        });
    }

    SetVisibilityOfFlowInput = ["id_flow", "visible"];
    SetVisibilityOfFlow({ id_flow, visible }) {
        return this._driver.sendPut({
            data: { id_flow, visible },
            endpoint: "/flow/visibility",
        });
    }

    SetWorkspaceSettings() {
        return this._driver.sendPost({
            endpoint: "/users/workspace",
        });
    }

    StartTrainingForMyself() {
        return this._driver.sendPost({
            endpoint: "/trainings/start",
        });
    }

    SumCustomUserTrainingsValueInput = ["id_identity"];
    SumCustomUserTrainingsValue({ id_identity }) {
        return this._driver.sendPost({
            data: { id_identity },
            endpoint: "/agreements/sum.admin",
        });
    }

    SwapPosts() {
        return this._driver.sendPut({
            endpoint: "/posts/swap",
        });
    }

    SwitchIdentity() {
        return this._driver.sendPost({
            endpoint: "/identities/switch",
        });
    }

    SwitchPartnership() {
        return this._driver.sendPost({
            endpoint: "/partnership/switch",
        });
    }

    SystemTimeInput = ["id_identity"];
    SystemTime({ id_identity }) {
        return this._driver.sendGet({
            endpoint: "/system/time",
        });
    }

    TemplateResolver() {
        return this._driver.sendGet({
            endpoint: "/template-resolver",
        });
    }

    TestTransport() {
        return this._driver.sendPost({
            endpoint: "/transports/test",
        });
    }

    TrainingAccountInfo() {
        return this._driver.sendPost({
            endpoint: "/trainings/account-info",
        });
    }

    TrainingLeaderboardForClient() {
        return this._driver.sendPost({
            endpoint: "/trainings/audit-leaderboard",
        });
    }

    TrainingLeaderboardForEmployeeInput = ["id_audit"];
    TrainingLeaderboardForEmployee({ id_audit }) {
        return this._driver.sendPost({
            endpoint: ["trainings", encodeURIComponent(id_audit), "employee-leaderboard"].join("/"),
        });
    }

    UnsignEmployeeFromTagInput = ["id_data", "id"];
    UnsignEmployeeFromTag({ id_data, id }) {
        return this._driver.sendDelete({
            data: { id_data, id },
            endpoint: ["tags", encodeURIComponent(id)].join("/"),
        });
    }

    UpdateAuditRecipeInput = ["recipe", "id"];
    UpdateAuditRecipe({ recipe, id }) {
        return this._driver.sendPut({
            data: { recipe, id },
            endpoint: ["audits", encodeURIComponent(id), "recipe"].join("/"),
        });
    }

    UpdateAuditStateInput = ["state", "id"];
    UpdateAuditState({ state, id }) {
        return this._driver.sendPut({
            data: { state, id },
            endpoint: ["audits", encodeURIComponent(id), "state"].join("/"),
        });
    }

    UpdateAuditStateAsModeratorInput = ["state", "user", "id"];
    UpdateAuditStateAsModerator({ state, user, id }) {
        return this._driver.sendPut({
            data: { state, user, id },
            endpoint: ["audits", encodeURIComponent(user), encodeURIComponent(id), "state"].join("/"),
        });
    }

    UpdateAuditWelcomeSettingsInput = ["logo", "contact", "website"];
    UpdateAuditWelcomeSettings({ logo, contact, website }) {
        return this._driver.sendPost({
            data: { logo, contact, website },
            endpoint: "/audits/welcome-settings",
        });
    }

    UpdateCourse() {
        return this._driver.sendPut({
            endpoint: "/courses",
        });
    }

    UpdateDataPoolOfCompany() {
        return this._driver.sendPut({
            endpoint: "/company/data-pool",
        });
    }

    UpdateDealStateInput = ["state", "target_state", "id"];
    UpdateDealState({ state, target_state, id }) {
        return this._driver.sendPut({
            data: { state, target_state, id },
            endpoint: ["deals", encodeURIComponent(id), "state"].join("/"),
        });
    }

    UpdateFlow() {
        return this._driver.sendPut({
            endpoint: "/flows",
        });
    }

    UpdateFlowItem() {
        return this._driver.sendPut({
            endpoint: "/flow/items",
        });
    }

    UpdateMineTransport() {
        return this._driver.sendPut({
            endpoint: "/transports",
        });
    }

    UpdateMjmlOfPublicTemplate() {
        return this._driver.sendPut({
            endpoint: "/templates/public-mjml",
        });
    }

    UpdateOrderAsModeatorInput = ["id", "order"];
    UpdateOrderAsModeator({ id, order }) {
        return this._driver.sendPost({
            data: { id, order },
            endpoint: "/missions/order",
        });
    }

    UpdatePost() {
        return this._driver.sendPut({
            endpoint: "/posts",
        });
    }

    UpdatePublicTemplateInput = ["id", "id_category", "name", "sender_name", "based_on", "training_only", "lang", "story", "featured", "mjmlCode", "htmlCode", "id_identity", "is_public", "id_mail_transport", "trusted"];
    UpdatePublicTemplate({ id, id_category, name, sender_name, based_on, training_only, lang, story, featured, mjmlCode, htmlCode, id_identity, is_public, id_mail_transport, trusted }) {
        return this._driver.sendPut({
            data: { id, id_category, name, sender_name, based_on, training_only, lang, story, featured, mjmlCode, htmlCode, id_identity, is_public, id_mail_transport, trusted },
            endpoint: "/templates/public",
        });
    }

    UpdateRecordInput = ["id_data", "first_name", "last_name", "email"];
    UpdateRecord({ id_data, first_name, last_name, email }) {
        return this._driver.sendPut({
            data: { id_data, first_name, last_name, email },
            endpoint: "/data",
        });
    }

    UpdateStopTrainingsInput = ["stop_trainings", "id"];
    UpdateStopTrainings({ stop_trainings, id }) {
        return this._driver.sendPut({
            data: { stop_trainings, id },
            endpoint: ["audits", encodeURIComponent(id), "stop_trainings"].join("/"),
        });
    }

    UpdateSyncProfiles() {
        return this._driver.sendPut({
            endpoint: "/sync-profiles",
        });
    }

    UpdateTag() {
        return this._driver.sendPut({
            endpoint: "/tags",
        });
    }

    UpdateTemplateInput = ["name", "sender_name", "senderName", "id_mail_transport", "lang", "id_category", "htmlCode", "deleted", "featured", "story", "training_only", "id"];
    UpdateTemplate({ name, sender_name, senderName, id_mail_transport, lang, id_category, htmlCode, deleted, featured, story, training_only, id }) {
        return this._driver.sendPost({
            data: { name, sender_name, senderName, id_mail_transport, lang, id_category, htmlCode, deleted, featured, story, training_only, id },
            endpoint: ["templates", encodeURIComponent(id), "update"].join("/"),
        });
    }

    UpdateTemplateCategoryNamesInput = ["id", "name", "pl_name"];
    UpdateTemplateCategoryNames({ id, name, pl_name }) {
        return this._driver.sendPut({
            data: { id, name, pl_name },
            endpoint: "/template-category/name",
        });
    }

    UpdateTemplateCategoryPriorityInput = ["id", "priority"];
    UpdateTemplateCategoryPriority({ id, priority }) {
        return this._driver.sendPut({
            data: { id, priority },
            endpoint: "/template-category/priority",
        });
    }

    UpdateTermsOfUseDate() {
        return this._driver.sendPost({
            endpoint: "/app-settings/terms-of-use",
        });
    }

    UpdateTurnoverOfCompany() {
        return this._driver.sendPut({
            endpoint: "/company/turnover",
        });
    }

    UpdateTypeOfCompany() {
        return this._driver.sendPut({
            endpoint: "/company/type",
        });
    }

    VersionSpreading() {
        return this._driver.sendGet({
            endpoint: "/_debug/version",
        });
    }

    WeakestLink() {
        return this._driver.sendGet({
            endpoint: "/reports/weakest-links",
        });
    }

};