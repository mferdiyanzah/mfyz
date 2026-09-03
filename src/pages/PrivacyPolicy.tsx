import { FC } from "react";

const PrivacyPolicy: FC = () => {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <div className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
        <a
          href="/"
          className="text-sm font-medium uppercase tracking-[0.06em] text-rust hover:underline"
        >
          ← Back to MFYZ
        </a>

        <header className="mt-12 border-b border-ink/10 pb-10">
          <div className="overline">Lab MFYZ</div>
          <h1 className="font-display text-5xl font-normal tracking-[-0.03em] md:text-7xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-ink-soft">Last updated: September 1, 2026</p>
        </header>

        <article className="prose prose-lg mt-12 max-w-none prose-headings:font-display prose-headings:font-medium prose-headings:tracking-tight prose-p:text-ink-soft prose-li:text-ink-soft prose-a:text-rust prose-a:no-underline hover:prose-a:underline">
          <p>
            This Privacy Policy explains how Lab MFYZ (&quot;we&quot;, &quot;us&quot;,
            or &quot;our&quot;) handles information when you use our personal software
            projects and applications available through https://mfyz.site.
          </p>

          <h2>1. Who operates this application</h2>
          <p>
            Lab MFYZ is operated by Mohammad Ferdiyanzah, an independent software
            engineer based in South Tangerang, Indonesia. For privacy questions,
            contact us at{" "}
            <a href="mailto:mferdiyanzah@gmail.com">mferdiyanzah@gmail.com</a>.
          </p>

          <h2>2. Google user data we may access</h2>
          <p>
            When you explicitly authorize a Lab MFYZ application with your Google
            account, the application may access only the Google services and data
            needed for the feature you requested. Depending on the application
            configuration, this can include:
          </p>
          <ul>
            <li>Gmail messages and message metadata;</li>
            <li>Google Calendar events and calendar metadata;</li>
            <li>Google Drive file metadata and file contents;</li>
            <li>Google Sheets spreadsheet data;</li>
            <li>Google Docs document data; and</li>
            <li>Google Contacts data.</li>
          </ul>
          <p>
            The exact permissions are shown on Google&apos;s consent screen before
            authorization. We do not request access to data that is unrelated to
            the feature being used.
          </p>

          <h2>3. How we use the data</h2>
          <p>Google user data is used only to:</p>
          <ul>
            <li>provide the feature you explicitly requested;</li>
            <li>read, organize, summarize, or process information you authorize;</li>
            <li>create or update content when the application feature requires it;</li>
            <li>maintain authentication and keep the application working; and</li>
            <li>troubleshoot errors and improve reliability.</li>
          </ul>
          <p>
            We do not use Google user data for advertising, profiling, credit
            scoring, or selling products. We do not sell Google user data.
          </p>

          <h2>4. Data sharing</h2>
          <p>
            We do not sell or rent Google user data. We do not share Google user
            data with third parties except when a service provider is technically
            required to operate the authorized feature, when required by law, or
            when you explicitly instruct the application to send or publish data.
            Any such processing is limited to the purpose of providing the
            requested feature.
          </p>

          <h2>5. Data storage and retention</h2>
          <p>
            Authentication credentials and application data may be stored on
            systems controlled by the operator or on infrastructure providers used
            to run the application. OAuth credentials are intended to be stored
            as protected secrets and are not committed to public source code.
          </p>
          <p>
            We retain data only for as long as needed to provide the requested
            feature, maintain the application, or comply with legal obligations.
            You may request deletion of application-held data by emailing us. Data
            that remains in your Google account is controlled by you and is not
            deleted from Google unless you explicitly request an operation that
            does so.
          </p>

          <h2>6. Security</h2>
          <p>
            We use reasonable technical and organizational measures to protect
            stored credentials and application data. No internet transmission or
            storage system can be guaranteed to be completely secure, so we cannot
            promise absolute security.
          </p>

          <h2>7. Your choices and revoking access</h2>
          <p>
            You can stop future access at any time by removing Lab MFYZ from your
            Google Account third-party connections at{" "}
            <a href="https://myaccount.google.com/permissions">
              myaccount.google.com/permissions
            </a>
            . You can also contact us to request deletion of data held by the
            application.
          </p>

          <h2>8. Children&apos;s privacy</h2>
          <p>
            Lab MFYZ is not directed to children under 13, and we do not knowingly
            collect personal information from children under 13.
          </p>

          <h2>9. Changes to this policy</h2>
          <p>
            We may update this Privacy Policy when the application or its data
            practices change. The updated version will be published on this page
            with a new &quot;Last updated&quot; date.
          </p>

          <h2>10. Contact</h2>
          <p>
            If you have questions about this Privacy Policy or want to request
            deletion of application-held data, email{" "}
            <a href="mailto:mferdiyanzah@gmail.com">mferdiyanzah@gmail.com</a>.
          </p>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
