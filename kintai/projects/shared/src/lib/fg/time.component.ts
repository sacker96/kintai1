export const timeRangeFormlyType = {
  name: 'timerange',
  extends: 'fg-group',
  defaultOptions: {
    fieldGroupClassName: 'horizontal-group time',
    fieldGroup: [
      {
        key: 'hour',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: '時間',
        },
      },
      {
        template: '<div class="px-1">:</div>',
      },
      {
        key: 'min',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: '分',
        },
      },
    ]
  }
};

export const timeFormlyType = {
  name: 'time',
  extends: 'fg-group',
  defaultOptions: {
    fieldGroupClassName: 'horizontal-group time',
    fieldGroup: [
      {
        key: 'hour',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: '時',
        },
      },
      {
        template: '<div class="px-1">:</div>',
      },
      {
        key: 'min',
        type: 'input',
        templateOptions: {
          type: 'number',
          label: '分',
        },
      },
    ]
  }
};
