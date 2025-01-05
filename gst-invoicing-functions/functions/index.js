const functions = require("firebase-functions/v1");
const admin = require("firebase-admin");
const axios = require("axios"); 
const { v4: uuidv4 } = require("uuid"); 
const { FieldValue } = require("firebase-admin/firestore"); 

admin.initializeApp();

exports.generateGSTInvoice = functions.firestore
  .document("bookings/{bookingId}")
  .onUpdate(async (change, context) => {
    const after = change.after.data();
    const before = change.before.data();

    if (after.status === "finished" && before.status !== "finished") {
      const bookingAmount = after.totalBookingAmount;
      const customerState = after.customerState;
      const businessState = after.businessState;

      const gstRate = 0.18;
      const totalGst = bookingAmount * gstRate;

      let sgst = 0;
      let cgst = 0;
      let igst = 0;

      if (customerState === businessState) {
        sgst = totalGst / 2;
        cgst = totalGst / 2;
      } else {
        igst = totalGst;
      }

      const gstDetails = { sgst, cgst, igst };

      try {
        
        const mockInvoiceId = uuidv4();
        const mockApiResponse = {
          status: 200,
          data: {
            message: "GST filing successful (mock)",
            invoiceId: mockInvoiceId,
            filingDate: new Date(),
            acknowledgementNumber:
              "MOCK-ACK-" + Math.floor(Math.random() * 10000), 
          },
        };

        console.log("GST Details:", gstDetails);
        console.log("Mock API Response:", mockApiResponse.data);

        await admin
          .firestore()
          .collection("bookings")
          .doc(context.params.bookingId)
          .update({
            gstDetails,
            invoiceNumber: mockInvoiceId,
            apiResponse: mockApiResponse.data,
            filingStatus: "success",
            filingDate: FieldValue.serverTimestamp(),
          });

        console.log(
          "GST details, invoice number, API response, filing status, and filing date updated successfully"
        );
      } catch (error) {
        console.error("Error processing GST and updating document:", error);
        await admin
          .firestore()
          .collection("bookings")
          .doc(context.params.bookingId)
          .update({
            filingStatus: "failed",
            filingError: error.message,
          });
      }
    }
  });
