<div class="reservation-info">
				<form method="post" class="reservation-form">
					<div class="field">
						<input type="text" name="res_name" placeholder="Name" required>
					</div>
					<div class="field">
						<input type="datetime-local" name="res_date" placeholder="Date" required>
					</div>
					<div class="field">
						<input type="text" name="res_email" placeholder="E-mail" required>
					</div>
					<div class="field">
						<input type="text" name="res_phone" placeholder="Phone Number" required>
					</div>
					<div class="field">
						<input type="textarea" name="res_message" placeholder="Message" required>
					</div>
					<input type="submit" name="res_reservation" value="Send" class="button submit_reserv">
					<input type="hidden" name="res_hidden" value="1">
				</form>
			 </div>