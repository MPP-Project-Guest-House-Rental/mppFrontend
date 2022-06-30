import * as React from "react";

import Button from "@mui/material/Button";

export default function ImageInformation() {
  return (
    <div className="form-inline mb-2">
      <div class="row mb-2">
        <div class="col-md-10">
          <label for="formFileMultiple" class="form-label">
            Property Images
          </label>
          <input
            class="form-control"
            type="file"
            id="formFileMultiple"
            multiple
          />
        </div>
      </div>
    </div>
  );
}
